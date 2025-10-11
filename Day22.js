// Pass a function to greet a user and then thank them

const thank=(name,callback) =>
{
    console.log(`Hello ${name}`);
    callback()
}

thank('saad',()=>{
    console.log("Thank you");
})

// . Implement a calculator function that accepts two numbers and a callback to perform operations like add, subtract

function calculator(a, b, operationCallback) {
  // Complete this function
 return operationCallback(a,b);
}

function add(x, y) {
  return x + y;
}

 console.log(calculator(5, 3, add))