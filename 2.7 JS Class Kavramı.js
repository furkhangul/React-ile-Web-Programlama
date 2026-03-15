//Classlar:

//Class nesne oluşturmayı ve nesne tabanlı yapıyı daha düzenli yazmamızı sağlayan bir sözdizimidir. 


class User{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

const user1 = new User("Furkan", 22);
const user2 =  new User("Kemal", 26);

console.log(user1.name) //Furkan yazar

//Veya başka bir örnek yapacak olursak:

class Car {
    constructor(brand,year){
        this.brand = brand;
        this.year = year;
    }
}

const car1 = new Car("Toyota", 2000);
console.log(car1)
