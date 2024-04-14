// class Heart {
//    
// }
//
// class Lungs {
//    
// }
//
// class Stomach {
//    
// }
//
// class Person {
//     constructor() {
//         this.heart = new Heart()
//         this.lungs = new Lungs()
//         this.Stomach = new Stomach()
//     }
// }
//
// const person1= new Person()
//
// console.log(person1)


class Engine {

}

const engine1 = new Engine()

class Transmission {

}

const transmission1 = new Transmission()

class Wheels {

}

const wheels1 = new Wheels()



class Car {
    constructor(engine, transmission, wheels) {
        this.heart = engine
        this.lungs = transmission
        this.Stomach = wheels
    }
}

const car1= new Car(engine1, transmission1, wheels1)

console.log(car1)