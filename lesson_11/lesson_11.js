// Promises

const getDataFromServer = (url) => {
    return new Promise((resolve, reject) => {
        if (!url.startsWith('http')) {
            reject('Invalid url', null)
        } else {
            setTimeout(() => {
                resolve(null, [{name: 'Alex'}])
            }, 1000)
        }
    })
}

const getData = () => {
    getDataFromServer('http:/api.com/users').then((users) => {
        return getDataFromServer('http:/api.com/users/2')
    }).then((user) => {
        return getDataFromServer('http:/api.com/users/2/book')
    }).then((books) => {
        return getDataFromServer('http:/api.com/users/2/book/123')
    }).then((book) => {
        return getDataFromServer('http:/api.com/users/2/book/123/pages')
    }).catch(
        () => {
        }
    )
}

const getDataAsync = async (e) => {
    try {
        const users = await getDataFromServer('http:/api.com/users/')
        const user = await getDataFromServer('http:/api.com/users/2')
        const books = await getDataFromServer('http:/api.com/users/2/book')
    } catch {
        console.log(e)

    } finally {
        console.log('finally')
    }

}


getDataFromServer('http:/api.com/users', (err, data) => {
    if (err) {
        throw  new Error(err)
    } else {
        console.log('Respons from server:', data)
        getDataFromServer('http:/api.com/users/2/', (err, data) => {
            if (err) {
                throw  new Error(err)
            } else {
                console.log('Respons from server:', data)
                getDataFromServer('http:/api.com/users/2/books/', (err, data) => {
                    if (err) {
                        throw  new Error(err)
                    } else {
                        console.log('Respons from server:', data)
                        getDataFromServer('http:/api.com/users/2/books/123', (err, data) => {
                            if (err) {
                                throw  new Error(err)
                            } else {
                                console.log('Respons from server:', data)
                                getDataFromServer('http:/api.com/users/2/books/123/pages/', (err, data) => {
                                    if (err) {
                                        throw  new Error(err)
                                    } else {
                                        console.log('Respons from server:', data)
                                        getDataFromServer('http:/api.com/users/2/books/123/pages/12', (err, data) => {
                                            if (err) {
                                                throw  new Error(err)
                                            } else {
                                                console.log('Respons from server:', data)

                                            }
                                        })
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    }
})


/*
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Some err')
    }, 2000)
})

promise.then((value) => {
    console.log(value)
})
*/


/*const api = {
    getTodolist() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({title: 'Monday'})
                // reject('Error')
            }, 1000)
        })
    }
}*/

/*
const api = {
    getTodolist() {
        return fetch('http:/api.com')
    }
}

function Users() {
    useEffect(() => {
        setIsLoading(true)
        api.getTodolist().then((todolist) => {
            setTodolist(todolist)
        }).catch((error) => {
            setError(error)
        }).finally(() => {
            setIsLoading(false)
        })

    })
}
*/

/*
const promisData = api.getTodolist()

promisData.then((value) => {
    console.log(value)
})

*/


/*
const prom = api.getTodolist()
    .then((data) => {
        console.log(data)
        return 10
    })
    .catch((err) => {
        console.log(err)
    })
    .finally(() => {
        console.log('Finally')
    })*/
