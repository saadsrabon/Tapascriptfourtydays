// 1. What will be the output of the following code and why?
let user = "Alice";

function outer() {
    function inner() {
        console.log(user);
    }
    let user = "Bob";
    inner();  //answer: Bob because inner function has its own scope and scope chain it will look for user variable in its own scope or nearby scope.
} 

outer();
// 2. What is the mistake in the code below?
let total = 0; // Global, bad practice

function add(num) {
    total += num;
}  // bad practice because anyone can pplute total from outside

add(5);
add(10);
console.log(total);
// 3. Create a function with a nested function and log a variable from the parent function.
function test (){
    let a = 10;
    return function(){
        console.log(a);
    }
}
// 4. Use a loop inside a function and declare a variable inside the loop. Can you access it outside?
function testLoopVariable(){
    for(let  i = 0; i < 5; i++){
        console.log(i);
    }
    // console.log(i);  // if we declare the variale inside the loop with var it will be accessible outside
    //but if we declare the variable inside the loop with let it will not be accessible outside
}
testLoopVariable();
// 5. Write a function that tries to access a variable declared inside another function.
function accessFromInner() {
     console.log(a);
    function inner() {
        let a =20;
    }
    inner();
}

// accessFromInner();
// 6. What will be the output and why?
console.log(a);
let a = 10;
// output will be nothing or refference error as TDZ
// 7. Where is the age variable accessible?
// function showAge() {
//     let age = 25;
//     console.log(age);
// }

// console.log(age);
// Options:

// A: In Global
// B: Only inside showAge
// C: It will cause an error
// D: None of the above
// 8. What will be the output and explain the output?
// let message = "Hello";

// function outer() {
//     let message = "Hi";

//     function inner() {
//         console.log(message);
//     }

//     inner();
// }

// outer();
// 9. What will be the output and why?
// let x = "Global";

// function outer() {
//     let x = "Outer";

//     function inner() {
//         let x = "Inner";
//         console.log(x);
//     }

//     inner();
// }

// outer();
// 10. What will be the output and why?
// function counter() {
//     let count = 0;
//     return function () {
//         count--;
//         console.log(count);
//     };
// }

// const reduce = counter();
// reduce();
// reduce();