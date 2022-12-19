class User {
    constructor(name, dateOfBirth) {
        this.name = name
        this.site = 'it-incubator'
        this.dateOfBirth = dateOfBirth
    }

    hello() {
        console.log(`My name is ${this.name} and i was born ${this.dateOfBirth}`)
    }
}

const user1 = new User('Chel', '12.12.12')
console.log(User)
user1.hello()