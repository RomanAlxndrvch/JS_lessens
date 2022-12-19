/*
const getNumber = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Math.random())
        }, 2000)
    })
}

getNumber().then(e => console.log(e))
*/


/*
const repo = {
    saveAsync(data) {
        return new Promise((resolve, reject) => {
            try {
                localStorage.setItem('someKey', JSON.stringify(data))
                console.log('saved')
                resolve()
            } catch (error) {
                reject(error)
            }
        })
    },
    read() {
        return new Promise((resolve, reject) => {
            let data = JSON.parse(localStorage.getItem('someKey'))
            data === null ? resolve('Wrong key') : resolve(JSON.parse(localStorage.getItem('someKey')))
        })
    }
}


const run = async () => {
    await repo.saveAsync('IT')
}

const read = async () => {
    try {
        console.log(await repo.read())
    } catch (e) {
        console.log(e)
    }
}
run()
read()*/


const wait = (time, num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(num)
            resolve()
        }, time)
    })
}
const run = async () => {
    await wait(1000, 1)
    await wait(1000, 2)
    await wait(1000, 3)
}

run()

