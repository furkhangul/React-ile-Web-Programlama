// querySelector ile HTML içerisindeki elementleri CSS seçicileri kullanarak seçebiliriz.
// Bu yöntem id, class, tag gibi seçimleri tek bir fonksiyon ile yapmamızı sağlar.
// querySelector sadece sayfada bulduğu ilk elementi döndürür.

// Örnek kullanım:
//class ile seçersek eğer:
var paragraf = document.querySelector(".intro1")

alert(paragraf.innerHTML)

//id ile seçersek eğer:
var yazar = document.querySelector("#yazar");

yazar.innerHTML = "Furkan Gül";

//tag ile seçersek eğer:
var baslik = document.querySelector("h1");

alert(baslik.innerHTML);


//QuerySelectorAll ise sadece selector'e sahip tüm elemanları seçer:
var liste = document.querySelectorAll("li");
alert(liste[0].innerHTML);
