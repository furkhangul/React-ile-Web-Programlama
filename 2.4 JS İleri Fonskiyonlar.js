//İleri seviye fonksiyonlar

//Temel basit bir fonksiyon yazacak olursak:
function Selam(){
    console.log("Selamlar !");
}

Selam();


//Daha fakrlı bir şekilde fonkisyonu çağıracak olursak:
var selamla = function SelamVer(){
    console.log("Merhabalar ! ")
}

//İleri seviye bir fonkisyon kullanacak olursak: Arrow function

const AyagaKalk = () => {
    console.log("Kullanıcı ayağa kalkar !");
}

AyagaKalk();

//Daha farklı şekilde de yazabilirdik: 

const as = () => console.log("Aleyküm selam !");

as();

//Parametre gönderme işlemi de gerçekleştirilebilir:

const parametreGonder = (mesaj) => alert("Mesajınız: " + mesaj)
parametreGonder("Selam Dünya")

//Başka bir örnek yapacak olursak:

var topla = (sayi1, sayi2) =>{
    return sayi1 + sayi1
}

const toplam = topla(3+5)
console.log(toplam)
