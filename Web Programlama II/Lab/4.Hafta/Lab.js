function hello(){ 
     console.log("Merhaba dünya ! ")
}
//Arrow function kullanımı ile fonksiyon kullanımı: 
const helloArrow = () => {console.log("Merhaba dünyaaaa ! ")}

helloArrow()

//Toplama işlemleri örneği : 
const toplam = (num1, num2) =>{return num1 + num2}
toplam(5,6)


//Çarpma : 
const carpim = (a,b) => {return a*b}
console.log(`Çarpım işlemi:${carpim(2*4)} `)

//Karesini alma : 
const kareAl = (x) => {x*x}
console.log(`Karesini Alınıd: ${kareAl(1)}`)

//Üs alma : 
const Us = (x) => Math.pow(x,3)
console.log(`2'nin Küpü : ${Us(2)}`)




/*
Map İşlemleri:
 */
const dizi = [1,2,3,4,5,6,7,8,9,0]
const kareler = dizi.map(x => x*x)
console.log(`Kareler: ${kareler}`)


//Farklı bir örnek: 
 const ekle = dizi.map(x=> x+2)
 console.log(`Eklenmiş dizi: ${dizi}`)


 //Örnek iki:
  
const sehirler = ["Siirt","Ankara", "İstanbul"]
console.log(`Dizi :${sehirler}`)
//Büyük harfler ile yazma işlemi için:
const buyukharf = sehirler.map(x => x.toUpperCase())
console.log(`Büyük harf: ${buyukharf}`)


/*
Reduce İşlemi
 */
const dizi2 = [0,1,2,3,4,5,6,7,8,9]

const toplam2 = dizi2.reduce()

//Örnek2
const enbuyuk = dizi2.reduce((oncek,sonraki)=> {return onceki+ sonraki})




/*
Filter
*/
const dizi3 =[0,1,2,3,4,5,6,7,8,9]
const tekler = dizi3.filte(x=> x%2 ==! 0)
const ciftler = dizi3.filter(x=> x%2 ===0)
console.log(`Dizi : ${dizi3}`)
console.log(`Tekler : ${tekler}`)
console.log(`Ciftler : ${ciftler}`)


//Ornek 2 

const sehir = ["İstanbul", "Ankara","Muş", "Siirt", "Van", "Kars","Bolu","Burdur","Balıkesir","Gümüşhane"]
const kisasehirler = sehir.filter(x => x.length <4)
console.log(`Şehirler : ${sehir}`)
console.log(`Kısa harfli şehirler : ${kisasehirler}`)
