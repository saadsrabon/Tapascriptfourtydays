const user = { name: "Alex", age: undefined };
console.log(user.age ?? "Not provided"); // Because we are checking with nullish coalescing operator ?? it checks if the value is null or undefined.So here it will print "Not provided" because age is undefined
// 2. What will happen if we try to modify a frozen object?
const obj = Object.freeze({ a: 1 });
obj.a = 2;
console.log(obj.a);// nothig will happen because we are trying to modify a frozen object

//but if we try to add a new property to a frozen object it will throw an error undefined
const obj1 = Object.freeze({ a: 1 });
obj1.b = 2;
console.log(obj1.b);// nothig will happen because we are trying to modify a frozen object

//we can use Object.seal() to seal an object 
const obj2 = Object.seal({ a: 1 });
obj2.a = 2;
console.log(obj2.a);// it will change