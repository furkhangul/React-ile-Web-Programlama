//Şart blokları:
var name = "Furkan"
if (name == "Furkan"){
    alert("İsim: "+ name)
}
else if(name =="Kerem"){
    alert("Name: " + name)
}
else {
    alert("Tanımıyorum !")
}


//Veya bağlacı ile çalıştırılması: 
var name2 = "Mert"
if(name == "Furkan" || name == "Mert"){
    alert("İsim: "+ name)
}
else {
    alert("Tanımıyorum !")
}

//Daha kompleks

var ad = "furkan"
var soyad = "gül"
if(ad == "furkan" && soyad=="gül"){
    alert("Doğru kişi !")
}
else{
    alert("Yanlış kişi !")
}
