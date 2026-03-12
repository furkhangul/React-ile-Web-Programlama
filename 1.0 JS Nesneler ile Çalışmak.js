var name = "Furkan"

//Nesen oluşturmak için kıvırcık parantez açılıp içine bilgiler girilir.
var kisi = {
    name  : "Furkan",
    surname :"Gül",
    age: 15,
    email : "furkanfg@gmail.com",
    accounts : ["fugke","furkan","furkangl"]
}

console.log(kisi)


//Değişiklikler için
kisi.age = 15
kisi.email  = "glfrkn@gmail.com"


//Veya bunların içinde fonksiyonlar bile tutulabilmektedir.

var book = {
    name: "Changes",
    author : "Franz Kafka",
    year : 1984,
    pageNumber : 89,
    read : function Read(){
        console.log("the book is reading...")
    }
}
