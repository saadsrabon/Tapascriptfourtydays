// ✅ What is a Class?
/***
 * class hosse ekta blue print jekhan theke amra chaile notun kno kichu toiri korte pari
 * as like ekta car so blue print hoilo plan then ei plan theke amra executions korte pari
 *
 *
 */
// ✅ ES6 Classes - Syntax
// ✅ Initialize Objects- “this” in Classes
// class Car {
//     constructor(name){
//         this.name =name
//     }

// ✅ The Type of Class -The type of class is function
// ✅ Class as Expression Class Fields
// const Teaceher = Class{
//     constructor(name){
//         this.name =name,
//     }
// }
// ✅ Getters and Setters
// geters and setters are use to get and set some value with that we can also add some validation
//so that it will not create a property without proper validation

//  ex

const Animal = class {
  constructor(value) {
    this.name = value;
  }

  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }
};

const a = new Animal("cow");
console.log(a);
// ✅ Static Properties
// ✅ Private and Public Fields
// ✅ Extending Class
// ✅ Abstraction
// ✅ Encapsulation
// ✅ Inheritance
// ✅ Polymorphism
// ✅ Composition
// ✅ What’s Nex




///tasks 
class Book {
  constructor(title,author,pages){
    this.title = title,
    this.author = author,
    this.pages = pages
  }
  describe (){
    console.log( `Title : ${this.title} , Author: ${this.author} , Pages : ${this.pages} `);
  }
}


const Book1 = new Book("Harry Porter" , "JK RAOLING " ,300);

console.log(Book1.describe());
 

const user = {};

Object.defineProperty(user, "name", {
  value: "Saad",
  writable: false,   // ❌ cannot modify
  enumerable: true,  // ✅ will show up in loops
  configurable: false // ❌ cannot delete or redefine
});

console.log(user.name); // "Saad"
user.name = "Apex";     // ❌ fails silently in non-strict mode
console.log(user.name); // still "Saad"



