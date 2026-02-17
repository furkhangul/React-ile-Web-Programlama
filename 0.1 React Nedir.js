/* React, Facebook  tarafından geliştirilen ve açık kaynak olarak sunulan bir JavaScript kütüphanesidir.
-- Modern, hızlı ve etkileşimli kullanıcı arayüzleri (UI) oluşturmak için kullanılır.
-- Özellikle Single Page Application (SPA) geliştirmek için en popüler teknolojilerden biridir.
-- Framework değil, UI kütüphanesidir ancak ek araçlarla birlikte tam bir uygulama geliştirme ortamı sağlar.*/

/*
-- 2011 yılında Facebook içinde geliştirilmeye başlandı.
-- 2013 yılında açık kaynak olarak yayınlandı.
-- Sürekli güncellenmektedir, ancak Angular gibi zorunlu büyük versiyon geçişleri genelde daha azdır.
-- Component (bileşen) tabanlı mimari kullanır.
*/

/*
React'in en önemli özelliği Component yapısıdır.
Component, arayüzün küçük ve tekrar kullanılabilir parçalar halinde yazılmasıdır.

Örneğin:
-- Navbar ayrı bir component
-- Footer ayrı bir component
-- Kart yapıları ayrı component olabilir

Bu sayede büyük uygulamalar yönetilebilir hale gelir.
*/

/* 
SPA (Single Page Application) Mantığı React'te çok yaygındır.

SPA'da:
-- Site ilk açıldığında tek bir HTML sayfası yüklenir.
-- Daha sonra sayfalar arası geçişte tüm sayfa yeniden yüklenmez.
-- Sadece değişmesi gereken bileşenler güncellenir.

Örneğin kullanıcı:
Ana sayfa → Profil sayfası → Ayarlar sayfası

Bu geçişlerde tarayıcı yeni sayfa indirmez.
Sadece React gerekli componentleri değiştirir.
*/

/*
Klasik web sitelerinde:
-- Her tıklamada sunucudan yeni HTML sayfası gelir
-- Sayfa tamamen yenilenir
-- Kullanıcı deneyimi daha yavaştır

React SPA yaklaşımında:
-- Sayfa yenilenmez
-- Veri çekilir ve arayüz güncellenir
-- Uygulama mobil uygulama gibi hissedilir
*/

/*
React Virtual DOM kullanır.

DOM (Document Object Model):
Tarayıcının sayfayı temsil ettiği ağaç yapısıdır.

Virtual DOM:
-- Gerçek DOM'un hafızadaki kopyasıdır
-- React değişiklikleri önce burada hesaplar
-- Sadece değişen kısımlar gerçek DOM'a uygulanır

Bu sayede performans ciddi şekilde artar.
*/

/* 
Mobil uygulamalar ve web siteleri genellikle verilerini kendi içinde tutmaz.

Veriler:
-- Sunucularda (server) tutulur
-- API aracılığıyla alınır
-- React uygulaması bu verileri ekrana basar

Örneğin:
-- Kullanıcı listesi
-- Ürünler
-- Mesajlar
-- Haber içerikleri
*/

/*
API (Application Programming Interface):
Uygulamanın sunucu ile konuşmasını sağlar.

React'te veri çekmek için genellikle:
-- fetch API
-- axios kütüphanesi
kullanılır.
*/

/*
React uygulamaları state (durum) kavramı üzerine kuruludur.

State:
-- Component içindeki değişebilir veridir
-- State değiştiğinde arayüz otomatik güncellenir

Örneğin:
-- Sayaç değeri
-- Form input verileri
-- Kullanıcı giriş durumu
*/

/*
Props (Properties):
-- Componentler arası veri taşımayı sağlar
-- Parent componentten child componente veri gönderilir
-- Salt okunurdur (değiştirilemez)
*/

/*
React Hooks (Fonksiyonel Componentlerde durum yönetimi):

En yaygın olanlar:

useState:
Component içinde state tutar

useEffect:
-- Yan etkileri yönetir
-- Veri çekme
-- Zamanlayıcı
-- DOM işlemleri

useRef:
DOM elemanlarına erişmek veya değer saklamak için kullanılır
*/

/*
AJAX:
Asynchronous JavaScript And XML anlamına gelir.

Ama modern React uygulamalarında veri alışverişi genellikle JSON formatında yapılır.

AJAX sayesinde:
-- Sayfa yenilenmeden veri alınır
-- Arka planda sunucu ile iletişim kurulur
-- SPA mantığı desteklenir
*/

/*
React Router:
SPA içinde sayfalar arası geçiş yapmak için kullanılır.

Tarayıcıda URL değişir ama sayfa yenilenmez.

Örneğin:
/home
/profile
/settings

Her biri farklı componenti gösterir.
*/

/*
React bize:

-- Hızlı uygulamalar
-- Dinamik arayüzler
-- Yeniden kullanılabilir bileşenler
-- Kolay bakım
-- Büyük projelerde düzen

sunmaya yardımcı olur.

Bu yüzden günümüzde en çok kullanılan frontend teknolojilerinden biridir.
*/

/*
Özetle React:

-- UI geliştirmek için kullanılır
-- Component tabanlıdır
-- Virtual DOM ile hızlıdır
-- SPA geliştirmek için idealdir
-- API ile veri alır
-- Modern web uygulamalarının temel araçlarından biridir
*/
