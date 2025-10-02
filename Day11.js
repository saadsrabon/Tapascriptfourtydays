// 1. What will be the output of the following code and why?
function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
    };
}
const counter = outer(); //answer: 1

// counter();   //answer: 2
// counter();   //answer: 3 becuser innter functions close over the count variable.
// 2. What will be the output and why?
function testClosure() {
    let x = 10;
    return function () {
        console.log(x);
       return x*=x
    };
}

console.log(testClosure()());

// the answer will be function because the testClosure function returns a function and if we call the function we will get the output

// console.log(testClosure()());
// 3. Create a button dynamically and attach a click event handler using a closure. The handler should count and log how many times the button was clicked.
// Create the button dynamically
const button = document.createElement('button');
button.textContent = 'Click Me';
document.body.appendChild(button);

// Use a closure to maintain the click count
function createClickHandler() {
    let clickCount = 0;

    return function() {
        clickCount++;
        console.log(`Button clicked ${clickCount} times`);
    };
}

// Attach the handler to the button
const handleClick = createClickHandler();
button.addEventListener('click', handleClick);


// 4. Write a function createMultiplier(multiplier) that returns another function to multiply numbers.
const  createMultiplier= (multiplier)=>{
let x = multiplier;
  return function (){
    return x*x;
  }
}

console.log(createMultiplier(10)())
console.log(createMultiplier(10)())
// 5. What happens if a closure references an object?
// As we know from execution context all non primitive values store in heap and refferece in stack so it will not clear the heap memory, automatic garbage collector will not work
// The object is garbage collected immediately
// The object remains in memory as long as the closure exists --this one
// The object is automatically cloned
// None of the Above.
// 6. Write a function factory of counter to increment, decrement, and reset a counter. Use closure to refer the count value across the functuions.

function factorycounter (){
    let counter =0;
    function increase (){
        counter++
        return counter
    }
    function decrease (){
       counter--     
       return counter
    }
    function reset (){
        counter=0;
        return counter
    }

    return {
        increase,
        decrease,
        reset
    }
}

console.log(factorycounter().increase())


let funcs = [];

for (let i = 0; i < 3; i++) {
    funcs.push(function() {
        console.log(i);
    });
}

funcs[0]();
funcs[1]();
funcs[2]();

// Write a function createRateLimiter(callback, delay) that returns a new function. When this returned function is called, it:

// Executes callback only if it hasn't been called in the last delay milliseconds.

// Otherwise, ignores the call silently.

// Note: You can use setTimeout to implement rate limiting.
const createRateLimiter=(callBack,delay)=>{
       let lastTime =0 ;
        function cancel (){
            lastTime =0;
        }
        function call (){

        
        const now =Date.now();
        if(now-lastTime>=delay ){
            lastTime =now;
            callBack()
        }
       }

       return {
        call,
        cancel
       }
}

const func =()=>{
    console.log("otp send")
}

const callthe =createRateLimiter(func,3000)
// callthe()
// callthe()
// callthe()
const debounce =(callback,delay)=>{
     let timeout;
     return function (...args){
        clearTimeout(timeout);
         timeout =setTimeout(()=>{
           callback(...args)
        },delay)
     }
}

document.getElementById('btn').addEventListener('click',debounce(func,3000))
const log = debounce((msg) => console.log(msg), 500);

log("Hello");
log("World");
// Only "World" will be logged after 500ms
