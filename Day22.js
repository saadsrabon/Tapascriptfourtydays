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

//   Create a delayedMessage function that prints a message after a delay using setTimeout
function delayedMessage(message, delay, callback) {
  // Your code here
  setTimeout(()=>callback(message),delay);
}

delayedMessage("Task complete", 2000, (delayedMessage) => console.log(delayedMessage))

// 4. Implement a function that filters numbers in an array based on a condition provided via callback

const filterFunction =(numbers,condition)=>{
    return condition(numbers);

}

const getOdd =(numbers)=>{
    const filtered =[]
    numbers.forEach((item =>{
        if(item%2 ==0 ){
            filtered.push(item)
        }else{
            return
        }
    }))
    return filtered;
}

console.log(filterFunction([4,5,6,7,8,10],getOdd));


function task1(callback) {
  console.log("Task 1 done");
  callback();
}

function task2(callback) {
  console.log("Task 2 done");
  callback();
}

function task3() {
  console.log("Task 3 done");
}

// Call them in sequence using nested callbacks

task1(()=>{
    task2(task3)
})