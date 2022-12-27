// class User {
//     age = 23 // свойства класса. Они заносятся в сам экземпляр класса
//
//     static maxNameLength = 16 // статические свойства. Они доступны только классу и не доступны экземпляру.
//
//     static validateUserName(name) {
//         if (this.maxNameLength < name.length) { // статические свойства. Они доступны только классу и не доступны экземпляру
//             console.log("Err")
//         }
//     }
//
//     constructor(name) { // функция-конструктор
//         this.name = name
//         User.validateUserName(name)
//     }
//
//     sayHi() {
//         console.log(this.name) // метод класса. Они занесутся в прототип класса
//     }
// }
//


// ===================PRIVATE FIELDS=============================
//
// class User {
//     #name // создания приватного поля
//
//     constructor(name) {
//         this.#name = name
//     }
//
//     getName() {
//         console.log(this.#name)
//     }
// }
//
// const user = new User('Alex')
// user.getName() // Так добираются до приватных полях в классе


// =============GET,SET===============================


// class User {
//     #name // создания приватного поля
//
//     constructor(name) {
//         this.#name = name
//     }
//
//     getName() {
//         console.log(this.#name) // Вариант обычный
//     }
//
//     setName(value) {
//         this.#name = value // Вариант обычный
//     }
//
//     get name() {
//         return this.#name // Вариант с ООП с гетером
//     }
//
//     set name(value) {
//         return this.#name = value // Вариант с ООП с сетером
//     }
// }
//
// const user = new User('Chel')
// user.name = 'Chelik ' // Доступ к сэттэру
// console.log(user.name) // Доступ к гэттэру

// ===========EXTENDS ================

// class Car {
//     static WHEELS_COUNT = 4
//
//     run(model) {
//         console.log('Car running')
//     }
// }
//
// class Ford extends Car { // У форта будут все методы форса и Car
//     fordRun() {
//         console.log('Ford running')
//     }
// }
//
// const mondeo = new Ford()
//
// mondeo.fordRun()
// mondeo.run()
// console.log(Ford.WHEELS_COUNT)


// ===SUPER===

class Car {
    constructor() {
        this.name = 'Car'
    }
}

class Ford extends Car {
    constructor(model) {
        super();
        this.name = model
    }
}

const ford = new Ford('Mondeo')
console.log(ford)