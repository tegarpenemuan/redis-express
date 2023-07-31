# Running

- node server.js
- akses `localhost:3000/photos` di REST CLIENT (Postman, Insomnia)
- Lihat sebelum menggunakan redis, `Time: 890 ms`
  ![sebelum menggunakan redis](img/before.png)
- Disini kita menggunakan RedisInsight untuk cek masuk atau tidak datanya:
  ![preview](img/redisInsight.png)
  Lihat sudah masuk
- Ketika kita hit kembali APInya, Lihat sekarang, `Time: 9 ms`
  ![sesudah menggunakan redis](img/after.png)
  Sangat cepat.

Penggunaan redis sebagai cache biasanya digunakan ketika menggunakan API pihak ketiga,
Hal ini dilakukan untuk mengurangi hit API ke pihak ketiga serta ketika API pihak ketiga
sedang lambat. Kita tidak terpengaruh oleh itu. Catatan hati-hati dalam penggunaan cache
pastikan datanya sesuai jangan terdapat miss.
