//addEventListener
//addEventListener HTML elementleri üzerinde gerçekleşen olayları dinlemek için kullanılır.
//Örneğin bir butona tıklanması, mouse hareketi veya klavyeden bir tuşa basılması gibi.
//Bu metod sayesinde belirlediğimiz olay gerçekleştiğinde istediğimiz JavaScript kodu çalıştırılır.

//Örnek kullanım:

var paragraf = document.querySelector("#intro1")

paragraf.addEventListener("click", function(){

    alert("ilk Paragrafa tıklandı")

})

//Veya arka plan ve yazı rengini değiştirmek için

var degis = document.getElementById("paragraf").addEventListener("click",rengidegistir);

function rengidegistir(){
    document.getElementById("paragraf").style.color = "purple"
    document.getElementById("paragraf").style.backgroundColor = "grey"
}
