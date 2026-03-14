//İleri Nesneler:

//[] === [] ifadesinde ikisi de eşit değilidir. Yani bilgisayar false döndürür.


const o = [1,2]
const u = [1,2]

var dde = o ===u;
console.log(dde) //false çevirecek çünkü bellekte bunların adları farklı kayıt altındadır.



//Mesela başka bir örnek verecek olursak

var nesne1 = {deger :1};
var nesne2 = {değer : 1};
var sorgu = nense1 === nesne2
console.log(sorgu)
//Değer ne olursa olsun farklı olarak algılandığı için aynı cevapları alamam.


//this ifadesine bakacak olursak:

//this bir fonksiyonun hangi nesne bağlamında çalıştığını ifade eder.
//this her zaman fonksiyonun çağrıldığı nesneyi temsil eder.

const user = {
  name: "Furkan",
  greet: function () {
    console.log(this.name);
  }
};

user.greet();


//Veya
const urun = {
    ekle : function(){
        console.log(this)
    }
}
