//Döngüler ile çalışmak: 

//10 değeri sırayla elle değiştirme gibi bir zamanımız olmadığından bunları otomatik bir şekilde yapan sistemlere ihtiyaç duymaktayız.
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log(6)
console.log(7)
console.log(8)
console.log(9)
console.log(10)

//Bu noktada döngüler devreye girmektedir.
for(var i =1; i <= 10; i++){
    console.log(i);
}
console.log("Bitti")


//Daha ileri örnekler için:
var sehirler = ["Siirt","İstanbul","Ankara","Kars","Muş"]
console.log(sehirler[0])

for(var i = 0; i <= sehirler.length; i++){
    console.log(sehirler[i])
}


//While ile for arasında herhangi bi fark yok aynı şeyler fakat while paramtreleri dışarıdan alır ve ayarlanmaya müsaittir. Bundan dolayı for daha pratiktir.
//Basit bir while örneği verecek olursak:
var i = 0;
while(i<10){
    console.log(i)
    i++;
}


//do while de ise durum sağlanmasa bile tek sefere mahsus olmak şartı ile bir defa çalıştırılır. Eğer koşul sağlanıyorsa zaten devam etmektedir.
//WhileDo örneği verecek olursak : 
var k = 5;
do{
    console.log(i)
}while(i > 10)
