// ✅ What is an Array in JavaScript?
  //Aray is like a container where you can put any type of data and its index start from 0;
   
// ✅ How to Create an Array in JavaScript?
   const name = [];
   const arr = new Array(5,4,6) // it will result [5,4,6]
   const arr2 = new Array(5) // It will result [5*empty]
// ✅ How to Get Elements from an Array in JS?
   //we can get data mainly by accesing the index point
      const val = arr[2] // it will result 6 here
// ✅ How to Add Elements to an Array in JS?
      arr2.push(4)
// ✅ How to Remove Elements from an Array in JS?
arr.pop()
// ✅ How to Copy and Clone an Array in JS?
const arrcl =arr.slice()
console.log(arr)
console.log(arrcl)
// ✅ How to Determine if a Value is an Array in JS?
const check = Array.isArray(arr)
console.log(check)
// ✅ Array Destructuring in JavaScript
const [saad,kamal]=[4,5]
// ✅ How to Assign a Default Value to a Variable?
const [saa,kama=4]=[4,5]
// ✅ How to Skip a Value in an Array?
const [d,g,,,f]=[75,7,8,7,8,5]
// ✅ Nested Array Destructuring in JS
// ✅ How to Use the Rest Parameter in JS?

// ✅ How to Use the Spread Operator in JS?
const bc= [...arr]
// ✅ Destructuring Use Cases in JavaScript
// ✅ How to Swap Values with Destructuring?
  let a = 1;
let b = 2;

console.log(`Before swap: a = ${a}, b = ${b}`); // Output: Before swap: a = 1, b = 2

[a, b] = [b, a];

console.log(`After swap: a = ${a}, b = ${b}`);  // Output: After swap: a = 2, b = 1

// ✅ How to Merge Arrays?
const abc= [456,4,5]
const bde =[4,5,8]
const merge =[...abc,...bde]
console.log(merge)
// ✅ The length property


// ✅ JavaScript Array Methods
// ✅ How to Create, Remove, Update, and Access Arrays in JavaScript?
// ✅ The concat() array method
//The concat method helps you to  merge multiple  array to one array
const myarr = [7,5,6]
const myarr2 = [8,8,8]
const myarr3 =[7,5,6]

 const concatedArray = myarr.concat(myarr2,myarr3);
 console.log(concatedArray);
  
// ✅ The join() array method
 
// We can use joun

// ✅ The fill() array method
// ✅ The includes() array method
// ✅ The indexOf() array method
// ✅ The reverse() array method
// ✅ The sort() array method
// ✅ The splice() array method
// ✅ The at() Method
// ✅ The copyWithin() Method
// ✅ The flat() Method
// ✅ Grouping elements in Array