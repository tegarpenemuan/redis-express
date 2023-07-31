const express = require("express");
const axios = require("axios");
const cors = require("cors");
const Redis = require("ioredis");

const redis = new Redis();

const app = express();
app.use(cors());

app.get("/photos", async (req, res) => {
  const albumId = req.query.albumId;
  redis.get(`photos?albumId=${albumId}`, async (err, result) => {
    if (err) console.error(err);
    if (result != null) {
      res.json(JSON.parse(result));
    } else {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/photos",
        { params: { albumId } }
      );
      await redis.set(
        `photos?albumId=${albumId}`,
        JSON.stringify(data),
        "EX",
        3600
      );
      res.json(data);
    }
  });
});

app.listen(3000, () => {
  console.log(`Server running on http://localhost:3000`);
});
