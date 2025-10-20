const shared = { city: "Dhaka" };
const person1 = { name: "Madina", address: shared };
const person2 = { name: "Aurora", address: shared };

const user = {
  name: "Dom",
  address: { city: "Dhaka" }
};

const copyUser = Object.assign({}, user);
copyUser.address.city = "Chittagong";

console.log(user.address.city); // what do you expect?


const deepCopy = structuredClone(user);
deepCopy.address.city ="sylhet";
console.log(user.address.city); 

// Create an object animal with a method speak().
const ani ={
    speak(){
        console.log("Ani speaking")
    }
}

const dog = Object.create(ani);
console.log(Object.getPrototypeOf(dog));
// Use Object.create(animal) to make another object dog.

// Call dog.speak() — what do you see?

// 🧩 Task 1 (Practice Sharing Methods)

// Create a constructor Car with a property brand.

// Add a method drive() to Car.prototype that logs "Driving <brand>".

// Create two instances (car1 and car2) and call drive() on both.

// const MyCar =(brand)=>{
//     this.brand =brand;
// }

class MyCar {
    constructor(brand) {
        this.brand = brand;
    }
    drive() {
        console.log("Driving ", this.brand);
    }
}


car1 =new MyCar("BMW")
car2 =new MyCar("AUDI")
console.log(car1.drive())
console.log(car2.drive())