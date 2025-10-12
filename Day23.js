//Promise in Javascript is something like to make an asyncrohonus way to

// - What is a Promise in JavaScript?
// - Callback to Promise
// - Understanding Promise States
// - How promises are resolved and rejected
// - Handling Promises
// - Promise Chain
// - Handling Multiple Promises
// - How to Cancel a Promise
// - That PizzaHub App
// - Tasks and Assignments

/*let promise = new Promise(function(resolve, reject){

});

// Executor
function(resolve, reject){
    // Logic goes here
    resolve()
    reject()
    resolve()
}*/

// state -
// pending: Initially when the executor function starts the execution.
// fulfilled: When the promise is resolved.
// rejected: When the promise is rejected.

// result -
// undefined: Initially when the state value is pending.
// value: When resolve(value) is called.
// error: When reject(error) is called.

// - How promises are resolved and rejected

//Creating a promise

const promise = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve("Hello Promise")
    },2000);
})

promise.then(data=>console.log(data));

//Reject a promise

const promise2 = new Promise(function(resolve,reject){
    reject("I am rejecting this Promise for you");
})

promise2.then(
    data =>{
        console.log(data)
    },
    error=>{
        console.log(error)
    }
)