/* 
The Promise object represents the eventual completion (or failure)
of an asynchronous operation and its resulting value.

A Promise is in one of these states:
pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed.
*/

// how to initialize promise and and how to consume it:
const promiseOne = new Promise(function(resolve, reject){
    //Do an Async task
    // DB calls, crypthography, network
    setTimeout(() => {
        console.log('Async task is complete');
        resolve() // to connect .then with resolve parameter
    }, 1000);
}) 

// This time we are not holding it in variable directly comsuming it
promiseOne.then(()=> {
    console.log('Promise Consumed')
})

new Promise(function(resolve, reject){
   
    setTimeout(() => {
        console.log('Async task 2');
        resolve() // to connect .then with resolve parameter
    }, 2000);
}).then(()=>{
    console.log('Async 2 resolved');
    
}) 

// In this example, will know about the how resolve() return data in .then(callback function) 
const consumeThree = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve(
            {
                name: "HK",
                email: "info@HK.com"
            }
        )
    }, 3000);
})

consumeThree.then(function(userData) {
    console.log(userData);
})

// In below example will know about reject() .then() .catch() .finally()
const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve(
                {
                    name: "chai",
                    email: "info@chai.com"
                }
            )
        } else {
            reject('ERROR: something went wrong.')
        }
    }, 4000);
})

promiseFour.then(function(userData) {
    // const {name} = userData; //destructing or:
    return userData.name
}).then((username) => {
    console.log(username);
}).catch(function(err){
    console.log(err);
}).finally(()=> console.log('Promise is either resolved or rejected'))

// We will know about async await:
const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve(
                {
                    name: "java",
                    email: "info@java.com"
                }
            )
        } else {
            reject('ERROR: in java.')
        }
    }, 5000);
})

// we can use async methodology inplace of .then().catch()
async function ConsumePromiseFive() {
    // must use try and catch block as async await cannot handle error directly
    try {
        const response = await promiseFive
        console.log(response);
        
    } catch (error) {
        console.log(error);
        
    }
}

ConsumePromiseFive()


// fetching some dummy data from a website:
// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         // console.log(data)

//         /*for (let index = 0; index < data.length; index++) {
//             const {name} = data[index]
//             // const name = data[index].name
//             console.log();
//             console.log(name);
//             console.log();
//         }*/
        
//     } catch (error) {
//         console.log('Error: ', error);   
//     }
// }

// getAllUsers()

// fetching same data from website but using .then().catch()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data)=>{
    console.log(data); 
})
.catch((err) => {
    console.log(err);
})
