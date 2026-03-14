//İleri seviye diziler:

const dizi  = [0,2,3,5,9,7]
//Dizilerideki sayıları yazdırmak için:
dizi.forEach(sayi => {
    console.log(sayi)
})

//Eğer bu dizideki sayıları yeni bir dizi oluşturup ve her bir sayının karesini almak istersek:

const yeniDizi =  []

dizi.forEach(i => {
    yeniDizi.push(i * i)
})

//Map fonksiyonu foreach yerine kullanışlarak dizideki tümr
//elemanların gezinmesini sağlayabilmektedir.

const Mapile = dizi.map(sayi => sayi * sayi)

//filter kullanımı
//filter istenilen aramalrı yapıp bulmamızı sağlar:
//2den büyük ifadeleri göstermek istersek:
const filtrele = dizi.filter(sayi => sayi >2)
console.log(filtrele)


//reduce kullanımı:
//Reduce dizideki tüm elemanları tek bir şeye indirger.

const toplam  = dizi.reduce((acc,sayi) => {
    return acc+ sayi
})

console.logt(toplam(3,7))
