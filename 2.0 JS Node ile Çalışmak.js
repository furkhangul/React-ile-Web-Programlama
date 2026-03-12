//Node (Düğüm)
//HTML sayfasındaki her şey DOM yapısında bir node (düğüm) olarak temsil edilir.
//Elementler, yazılar ve yorumlar birer node olarak kabul edilir.
//JavaScript ile bu node'lara erişebilir ve üzerinde değişiklik yapabiliriz.

//Örneğin HTML içerisindeki bir paragraf, başlık veya liste elemanı birer node'dur.


//querySelector ile bir HTML elementini seçerek node elde edebiliriz.
var paragraf = document.querySelector("#paragraf")

alert(paragraf.innerHTML)


//childNodes ile bir elementin içerisindeki alt node'lara erişebiliriz.

var liste = document.querySelector("ul")

alert(liste.childNodes.length)


//parentNode ile bir elementin üst elementine ulaşabiliriz.

var paragraf = document.querySelector("#intro1")

alert(paragraf.parentNode.nodeName)




//createElement ile yeni bir HTML elementi yani node oluşturabiliriz.

var yeniEleman = document.createElement("li")

yeniEleman.innerHTML = "Bursa"


//appendChild ile oluşturduğumuz node'u HTML içerisine ekleyebiliriz.

var liste = document.querySelector("ul")

var yeniEleman = document.createElement("li")

yeniEleman.innerHTML = "Bursa"

liste.appendChild(yeniEleman)
