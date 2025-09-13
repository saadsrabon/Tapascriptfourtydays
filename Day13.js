const hello =()=>{
    console.log(this)
    return function(){
        console.log(this)
    }
}

const hello1 =hello()

console.log(hello1())


const user = {
  name: "tapaScript",
  greet: function(){
    console.log(`Hello, ${this.name}!`);
  },
};

user.greet();

const users = {
  name: "Alex",
  greet: function () {
    function inner() {
      console.log(`Hello, ${this.name}!`);
    }
    inner();
  },
};

user.greet();


// 5. Create a Sports constructor function that takes name and number of players as arguments and assigns them using this keyword. Then, create two sports instances and log their details


function Sport (name,number){
   this.name =name
   this.number =number
}

const person = new Sport("saad",10)
console.log(person)
console.log(person.name)

// 6. Can you attach the car1's describe() method to car2 object? Give all possible solutions that you can think of
const car1 = {
  brand: "Audi",
  model: "A8",
  describe: function () {
    console.log(`This car is a ${this.brand} ${this.model}.`);
  },
};

const car2 = {
  brand: "BMW",
  model: "X1",
};

let val =car1.describe.bind(car2)

console.log(val())

//  
const persons = {
  name: "Charlie",
  sayHello: function () {
    console.log(this.name);
  },
  sayHelloArrow: () => {
    console.log(this.name);
  },
};

persons.sayHello(); // its refered to object and second one is refer to undeifw
persons.sayHelloArrow();

