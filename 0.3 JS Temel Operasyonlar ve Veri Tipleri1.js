// JavaScript TEMEL OPERASYONLAR ve VERİ TİPLERİ 1


/* =========================
   1) PRIMITIVE VERİ TİPLERİ
   JavaScript'te 7 adet ilkel (primitive) veri tipi vardır:
   - number
   - string
   - boolean
   - undefined
   - null
   - bigint
   - symbol
========================= */



// Number: Tam sayılar ve ondalıklı sayılar için kullanılır
let tamSayi = 42
let ondalik = 3.14
let negatif = -10



// String: Metinsel ifadeler için kullanılır 
let metin1 = "Merhaba"
let metin2 = 'Dünya'
let metin3 = `Template string kullanımı`



// Boolean: true veya false değerlerini alır.
let dogru = true
let yanlis = false



// Undefined: Değer atanmamış değişken.
let tanimsiz



// Null: Bilinçli olarak boş değer verilmesi 
let bosDeger = null



//BigInt: Çok büyük sayılar için 
let buyukSayi = 9007199254740991n



// Symbol: Benzersiz değer üretir
let benzersiz = Symbol("id")



/* =========================
   2) REFERANS (OBJECT) TİPLERİ
   - Object
   - Array
   - Function
========================= */



// Object: Anahtar-değer yapısı
let kisi = {
    ad: "Furkan",
    yas: 21,
    ogrenci: true
}



// Array: Sıralı veri listesi
let sayilar = [1, 2, 3, 4, 5]
let karisik = ["metin", 10, true, null]



// Function: İşlev tanımı 
function topla(a, b) {
    return a + b
}



/* =========================
   3) ARİTMETİK OPERATÖRLER
========================= */

let a = 10
let b = 3

let toplama = a + b
let cikarma = a - b
let carpma = a * b
let bolme = a / b
let mod = a % b
let us = a ** b



//   4) ARTIRMA / AZALTMA


let sayi = 5
sayi++
sayi--



//   5) KARŞILAŞTIRMA OPERATÖRLERİ

let x = 5
let y = "5"

let esittir = x == y
let kesinEsit = x === y
let esitDegil = x != y
let kesinDegil = x !== y
let buyuk = x > 3
let kucuk = x < 10
let buyukEsit = x >= 5
let kucukEsit = x <= 4



//   6) MANTIKSAL OPERATÖRLER


let mantik1 = true && false
let mantik2 = true || false
let mantik3 = !true



//   7) ATAMA OPERATÖRLERİ

let n = 10
n += 5
n -= 3
n *= 2
n /= 4
n %= 3
n **= 2



//   8) STRING OPERASYONLARI

let ad = "Furkan"
let soyad = "Gül"

let tamAd = ad + " " + soyad
let uzunluk = tamAd.length
let buyukHarf = tamAd.toUpperCase()
let kucukHarf = tamAd.toLowerCase()
let parca = tamAd.substring(0, 6)
let karakter = tamAd[0]



//   9) TYPE DÖNÜŞÜMLERİ


let sayiStr = "123"
let sayiyaCevir = Number(sayiStr)

let sayi2 = 456
let stringeCevir = String(sayi2)

let boolCevir = Boolean(1)



//   10) KOŞUL YAPILARI

let yas = 20

if (yas >= 18) {
    console.log("Reşit")
} else {
    console.log("Reşit değil")
}



let not = 85

if (not >= 90) {
    console.log("AA")
} else if (not >= 80) {
    console.log("BA")
} else {
    console.log("Geçti")
}
