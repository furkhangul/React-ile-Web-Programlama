//GetElementByTagName kullanımı ile egzersizler:

var intro1 = document.getElementById("intro1")
var paragraf = document.getElementById("paragraf")

//Birinci başlığı paragraf ile değiştirmek istersek:

paragraf.innerHTML = intro1.innerHTML;

//ID verilmeyen sistemlerde ise bazen tag isimleri ile de ulaşabilmemiz mümkündür.

var listeler = document.getElementsByTagName("ul")
var Sehirler = listeler[0]
var sehirElemanlari = document.getElementsByTagName("li")

for(var i =0; i <= sehirElemanlari.length ; i ++){
    alert(sehirElemanlari[i].innerHTML)
}
