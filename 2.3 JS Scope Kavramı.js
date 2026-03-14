//EcmaScipt geliştirmeleri üzerine yeni bir kavram daha ortaya çıkmıştır.
//JS'de kullanılan var ifadesi yerine artık let ve const kullanılmaktaıdr.
//Ayıca scope ifadeleri de kullanımı ecma ile yaygınlaştırılmıştır.


//Bugüne kadar bir şeyler tanımlarken var kullanmkataydık.
var sehir = "Siirt"
var ulke  = "Türkiye"
var sayi = 10

console.log(sayi + sehir + ulke)

//şeklinde çalıştırmaktaydık. Fakat örnek olacak olursak:

var sehir = "Ankara"
//şeklinde daha önce tanımlanmış bir değişkeni unutup başka değişken tanımlayabildim

//Bundan dolayı JS geliştiricileri var ile değişken üretmeyi desteklemezler.
//Karmaşıklıkları ve yanlış olabilecek durumları engellemek adına let veya const kullanılması daha sağlıklıdır.

let il = "Bursa"

//let ile bir şeyler değiştirmek istediğimizde:
il = "Urfa"

//let buna izin verir. Yani il artık urfa olarak atandı.
//Fakat let farklı aynı addaki değişken oluşturulmasına izin vermemektedir.
//Örnek verecek olursak:

// var il = "Manisa"  hata verir

//Ayrıca eğer il ="Urfa şekilde bile değişken değiştirmek istemiyorsak bu defa const kullanırız.
// const ifadesi yalnızca bir defa isim alır ve bir daha ne değiştirilir ne de aynı isimde başka bir 
// ifadenin kullanılmasına olanak tanır."

const ilce ="Niğde"

// const ilce = "Giresun" hata verir
//ilce = "Yozgat " hata verir.
