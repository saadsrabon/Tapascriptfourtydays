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
//.then() can take two arguments: the first for success, the second for failure:
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

//Return a Promise that randomly resolves to "Heads" or "Tails" after 1 second.

const toss = new Promise(function(resolve,reject){
    let value = Math.floor(Math.random()*2);
    console.log(value)
    value ==0?resolve("Head"):resolve("Tails")
})

toss.then(data=>console.log(data));

//Chain promise
const chain =new Promise(function(resolve,reject)
{
    resolve("step One done");
}
)

chain.then(data=>{
    console.log(data);
    return data = 'Step 2 is done'
})
.then(data=>{
    console.log(data)
    return data = "step 3 is done"
})
.then(data=>console.log(data))


//  Value Transformation in Chain
// Create a Promise that resolves with 5.
// Chain .then() handlers to double it, then square it.
// Final output should be 100.

const transformer = new Promise(function(resolve,reject){
    
    resolve(5);
})

transformer.then(v=>{ return v*2}).then(v=>v*v).then(v=>console.log(v));


// 7. Chain with Random Rejection
// First .then() resolves to "Start".
// Second .then() randomly throws an error or returns "Continue".
// Handle rejection gracefully.
const rej = new Promise((resolve, reject) => {
  resolve("Start"); // first step always succeeds
});

rej
  .then(data => {
    console.log(data); // "Start"
    
    // randomly throw error or continue
    if (Math.random() > 0.5) {
      throw new Error("Random error occurred!");
    } else {
      return "Continue";
    }
  })
  .then(data => console.log(data)) // runs only if no error
  .catch(err => console.log("Caught error:", err.message));

  const rej2 = new Promise((resolve, reject) => {
  resolve("Start"); // first step always succeeds
});


// Do the error by reject()
rej2
  .then(data => {
    console.log(data); // "Start"
    
    // randomly resolve or reject
    if (Math.random() > 0.5) {
      return Promise.reject("Random error occurred!");
    } else {
      return "Continue";
    }
  })
  .then(data => console.log(data)) // runs only if no rejection
  .catch(err => console.log("Caught error:", err));

// 9. Return New Promises in .then()
// Chain multiple .then() where each returns a new Promise with a delay and logs a step like:
// “First”
// “Second”
// “Third”

const delayLog =(message,time)=>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log(message ,"time second")
            res(time)
        },time)
    })
}
new Promise((res)=>res())
.then((d)=> delayLog("First",1000) )
.then((d)=> delayLog("second",1000) )
.then((d)=> delayLog("third",1000) )