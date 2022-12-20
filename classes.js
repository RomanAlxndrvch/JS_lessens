class User {
    constructor(name, dateOfBirth) {
        this.name = name
        this.site = 'it-incubator'
        this.dateOfBirth = dateOfBirth
        this.counter = 0
    }

    hello() {
        this.counter++
        console.log(`My name is ${this.name} and i was born ${this.dateOfBirth}. Counter : ${this.counter}`)
    }
}

const user1 = new User('Chel', '12.12.12')
user1.hello()


class Coder extends User {
    constructor(name, dateOfBirth, tech) {
        super(name, dateOfBirth);
        this.tech = tech
    }

    code() {
        console.log(`Im ${this.name}. This is my ${this.tech} code const sum=(a,b)=>a+b`)
    }

    hello() {
        super.hello()
        console.log('Go Away!')
    }
}

const coder1 = new Coder('Zadr', '15,15,15', 'JS')
coder1.code()
coder1.hello()