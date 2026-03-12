//replaceChild
//replaceChild metodu DOM içerisinde bulunan bir node'u başka bir node ile değiştirmek için kullanılır.
//Yani var olan bir HTML elementini silip yerine yeni bir element koymamızı sağlar.

//Kullanım şekli:

// parentNode.replaceChild(yeniNode, eskiNode)

//Bir paragrafı başka bir paragraf ile değiştirme

var yeniParagraf = document.createElement("p")

yeniParagraf.innerHTML = "Bu yeni paragraftır"

var eskiParagraf = document.querySelector("#intro1")

var parent = eskiParagraf.parentNode

parent.replaceChild(yeniParagraf, eskiParagraf)


