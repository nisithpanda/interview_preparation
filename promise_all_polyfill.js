// Write polyfill of promise.all

const dummyAPI = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(time)
        }, time)
    })
}

const tasksArray = [dummyAPI(1000), dummyAPI(3000), dummyAPI(5000)]

const promisePolyfill = (tasksArray) => {
    return new Promise((resolve,reject) => {
        const output = []
        tasksArray.forEach((promise, index) => {
            promise.then((data) => {
                console.log(`data is ${data}`)
                output[index] = data
                if (index === tasksArray.length - 1) resolve(output)
            }).catch((err) => {
                reject(err)
            })
        })
    })
}

promisePolyfill(tasksArray).then((data) =>  {
    console.log(`the output if ${data}`)
}).catch(err => {
    console.log(`the error is ${err}`)
})