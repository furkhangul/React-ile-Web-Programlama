// Diziler (Arrays)
// Birden fazla değeri tek değişkende tutmamızı sağlar.

var isimler = ["Furkan", "Kerem", "Mert"]   // dizi oluşturma
alert(isimler[0]) 
alert(isimler[1]) 


// Dizinin uzunluğu
alert(isimler.length) 


// Diziye eleman ekleme sona ekler
isimler.push("Ahmet")


// Diziden eleman silme sondan yani
isimler.pop()  


// Döngü ile diziyi gezme
for(var i = 0; i < isimler.length; i++){
    alert("İsim: " + isimler[i])
}
