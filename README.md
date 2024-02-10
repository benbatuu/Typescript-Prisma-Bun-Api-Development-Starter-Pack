#### Typescript & Prisma & Hono Api Development Starter Pack

- Database sorguları için ORM sistemlerinden <code>prisma</code> kullanıyoruz.
  -- Eğer bilgisayarınız da <code>prisma</code> yoksa, <a href="https://prisma.sh"><u>prisma indir</u></a> adresinden indirebilirsiniz.

- Sonrasında <code>HONO JS</code> ile server işlemlerimizi yapacağız. <code>NextJS</code> alternatifi olarak <code>HonoJS</code> kullanıyoruz.
- Paket yönetimi olarak <code>BUN</code> kullanıyoruz. Çünkü cache management olarak ve hız olarak diğer paket yönetim sistemlerinden çok daha iyi.
- <code>NODE JS & Typescript</code> programlama dillerini kullanıyoruz.
- Veritabanı olarak <code>PostgreSQL, sqlLite, MySQL, MongoDB, MsSQL vb.</code> veritaanı çeşitlerini kullanabilirsiniz.

#### Kurulum

- Öncelikle projeyi <code>git clone</code> komutları ile bilgisayarımıza indiriyoruz.
- Sonrasında, <code>bun install</code> komutu ile gerekli paketleri yüklüyoruz.
- Paketleri yükledikten sonra ise <code>ENV</code> dosyasında ki veritabanı url değerini değiştirmeniz gerekiyor. Kendi veritabanı bilgilerinizi içeren URL değerini yazmanız gerekiyor.
- ENV dosyasında ki değişikliklerin doğruluğundan emin olduktan sonra <code>prisma generate</code> komutu ile veritabanınız ile prisma arasında ki bağlantıyı oluşturuyoruz.
- Sonrasında, <code>prisma db push</code> komutu ile <code>prisma.schema</code> dosyasına yazmış olduğunuz modellerini veritabanımıza ekleme işlemini yapıyoruz.
- Veritabanı ile prisma schema arasında sync işlemi tamamlandıktan sonra, <code>bun run start</code> komutu ile projemizi çalıştırabiliriz.
- Default port olarak 3000 ile çalışacaktır. Sonrasında belirttiğiniz routelar üzerinden yazmış olduğunuz servislere erişim sağlayabilirsiniz.


> Dosya yapısında ekleme veya güncelleme olursa, proje güncellenecektir.
> 10.02.2024 18.32
> Author : Batuhan Küçük