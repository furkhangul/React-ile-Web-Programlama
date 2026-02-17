// JavaScript TEMEL OPERASYONLAR ve VERİ TİPLERİ 2



//Switch-case yapısı 

let gun = 3

switch (gun) {
    case 1:
        console.log("Pazartesi")
        break
    case 2:
        console.log("Salı")
        break
    case 3:
        console.log("Çarşamba")
        break
    default:
        console.log("Geçersiz gün")
}



/* =========================
   11) DÖNGÜLER
========================= */



/* For döngüsü */

for (let i = 0; i < 5; i++) {
    console.log(i)
}



/* While döngüsü */

let k = 0

while (k < 3) {
    console.log(k)
    k++
}



/* Do-while döngüsü */

let m = 0

do {
    console.log(m)
    m++
} while (m < 2)



/* =========================
   12) ARRAY OPERASYONLARI
========================= */

let dizi = [10, 20, 30]

dizi.push(40)
dizi.pop()
dizi.unshift(5)
dizi.shift()

let uzunlukDizi = dizi.length
let ilkEleman = dizi[0]



/* Döngü ile array gezme */

for (let i = 0; i < dizi.length; i++) {
    console.log(dizi[i])
}



/* Modern array metotları */

dizi.forEach(x => console.log(x))

let ikiKat = dizi.map(x => x * 2)

let filtre = dizi.filter(x => x > 10)



/* =========================
   13) OBJECT OPERASYONLARI
========================= */

let ogrenci = {
    ad: "Ali",
    yas: 22,
    bolum: "Yazılım"
}

let ogrenciAdi = ogrenci.ad
ogrenci.yas = 23
ogrenci.sehir = "İzmir"

delete ogrenci.bolum



/* Object anahtarlarını alma */

let anahtarlar = Object.keys(ogrenci)
let degerler = Object.values(ogrenci)



/* =========================
   14) FONKSİYON TÜRLERİ
========================= */



/* Fonksiyon bildirimi */

function carp(a, b) {
    return a * b
}



/* Fonksiyon ifadesi */

const bol = function(a, b) {
    return a / b
}



/* Arrow function */

const cikar = (a, b) => a - b



/* Parametresiz fonksiyon */

function selam() {
    console.log("Merhaba")
}



/* Varsayılan parametre */

function selamVer(isim = "Misafir") {
    console.log("Merhaba " + isim)
}



/* =========================
   15) HATA YÖNETİMİ
========================= */

try {
    let sonuc = 10 / 0
    console.log(sonuc)
} catch (hata) {
    console.log("Hata oluştu")
} finally {
    console.log("İşlem tamamlandı")
}



/* =========================
   16) TARAYICIYA ÇIKTI VERME
========================= */

console.log("Konsola yazdırma")
alert("Uyarı mesajı")
document.write("Sayfaya yazı")
