//Bir sayfa içerisindeki CSS kodlarında da JS üzerinden müdahale edebilmekteyiz.
//Bunun birden fazla yönetmi vardır. İsterseniz bu değiştirmeler HTML içerisinde olsun isterse başka bir CSS dosyası içerisinde olsun
//JS buralara müdahele ederek değiştirme işlemini gerçekleştirmektedir.

//Örnek değiştirme işlemi için:

var DegistirilecekCSS = document.getElementsByClassName("intro1")

alert(DegistirilecekCSS[0].innerHTML)
