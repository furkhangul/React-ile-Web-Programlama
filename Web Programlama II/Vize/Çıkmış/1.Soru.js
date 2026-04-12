
/*
ES6 kullanarak JavaScript dilinde, 'Ürün ID', 'Ürün Adı', 'Ürün Markası', 'Ürün Modeli', 'Ürün Kategorisi',
'Ürün Fiyatı' ve 'Ürün Resmi' özelliklerine sahip bir obje oluşturulacaktır. Objeyi oluşturduktan sonra,
'Ürün Adı' ve 'Ürün Markası' özelliklerini ayrı değişkenlere, diğer özellikleri ise aynı bir objeye tek satırda atanacaktır.
Gerekli JavaScript kodlarını yazınız.
*/

Liste = [ 
    {UrunId :1, UrunAd:"Telefon", Marka:"Apple", Model:"Iphone 16", Kategori:"Elektronik", Fiyat:60000, Resim:"resim.jpg" }
]

const {UrunAdi: Ad, Marka :  marka , ...Liste} = urun;

