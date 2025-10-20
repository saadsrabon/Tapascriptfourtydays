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



////

class Task {
  constructor(name){
    this.name =name,
    this.status = "pending"
  }
}
class TodoListManager {
  tasks =[];
  createTask (task){
    this.tasks.push(task)
  }
  markDone(name){
    let selected =this.tasks.find(t=>t.name === name);
    if(selected.status =="Pending"){
    selected.status ="Done"
    }else{
      selected.status ="Pending"
    }
  }

  listAllPending (){
   return this.tasks.filter(t=>t.status ==="Pending");
  }

}


const Todos = new TodoListManager();

Todos.createTask(new Task("Go to Gym"))
Todos.createTask(new Task("Go to House"))
Todos.createTask(new Task("Go to Baranda"))
Todos.createTask(new Task("Go to Anywhere"))
Todos.createTask(new Task("Go to Nowhere"));

console.log(Todos.tasks);


//  

let tasks =[];

// create task 
const createTask= ( tasks , todo )=>{
  return [...tasks,todo]
};

// modifyStatus

const toggleStatus =(tasks,taskName)=>{
  tasks.map(t=> {
    if(t.name === taskName){
     return {...t ,status: t.status === "pending" ? "done" : "pending"}
    }
  })
}

tasks = createTask(tasks, { name: "Go to Gym", status: "pending" });
tasks = createTask(tasks, { name: "Go to House", status: "pending" });
tasks = createTask(tasks, { name: "Go to Baranda", status: "pending" });

tasks = toggleStatus(tasks, "Go to Gym");

console.log(tasks)


/// 
class Temperature {
  #celsius;
  constructor(celsius) {
    this.#celsius = celsius;
  }

  get fahrenheit() {
    return (this.#celsius * 9) / 5 + 32;
  }

  set celsius(value) {
    if (typeof value !== 'number') throw new Error('Temperature must be a number');
    this.#celsius = value;
  }
}


//   Private and Public Fields

class User{
  name
  #password
  constructor(name ,pass){
    this.name =name
    this.#password =pass
  }
  checkpassword(pass){
    this.#password === pass?console.log(this.#password):console.log('wrong')
  }
}

const userhuman = new User("saad",123);
console.log(userhuman.name);
console.log(userhuman.password)

//  
class Vehicle{
  constructor(make,model){
    this.make =make
    this.model = model
  }

  start(){
    console.log("Engine Start")
  }
}

// ///

// Create a SmartLightBulb class:
// Public method: turnOn(), turnOff()
// Private method: #connectToWiFi()
// turnOn() first calls #connectToWiFi() and then logs: "Light is ON"
// Static method: info() — logs "SmartLightBulb v1.0 supports remote control and scheduling."
// Try accessing the private method directly and observe the error.


class SmartLightBulb{
  #connectToWifi(){
    console.log("connected to wifi");
  }
  turnOn(){
    this.#connectToWifi();
    console.log("Light is on");
  }
  turnOff(){
    console.log("light is off")
  }

  static info(){
    console.log("SmartLightBulb v1.0 supports remote control and scheduling.")
  }
}

console.log(SmartLightBulb.info())
const sm= new SmartLightBulb();
sm.turnOn()
sm.turnOff()
// sm.connectToWifi() // giving error that its not an function

// Animal Class and Subclasses
// Base Class: Animal(name, sound)
// Method: makeSound() logs: "The [name] says [sound]"
// Subclass 1: Dog(name) — inherits from Animal
// Overrides makeSound() → "The Dog [name] barks!"
// Subclass 2: Cat(name) — overrides makeSound() → "The Cat [name] meows!"
// Call super() inside each subclass constructor
// Add a shared method sleep() in Animal and test with both Dog and Cat instances.

class Animals{
  constructor(name,sound){
    this.name = name
    this.sound =sound
  }

  makeSound(){
    console.log(`${this.name} says ${this.sound}`)
  }

  sleep(){
    console.log(this.name ,"is sleeping")
  }

}

class Cat extends Animals{
  constructor(name,sound){
    super(name,sound)
  }
  makeSound(){
    console.log("The Cat meeows")
  }
}
class Dog extends Animals{
  constructor(name,sound){
    super(name,sound)
  }
  makeSound(){
    console.log("The Dogs bark")
  }
}

const dog = new Dog("Tommy","Bark")
const cat = new Cat ("Jimmy" ,"Meow")

console.log(dog.makeSound())
console.log(cat.makeSound())
console.log(dog.sleep())
console.log(cat.sleep())