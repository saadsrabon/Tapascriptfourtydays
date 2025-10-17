// //  Identify Real-Life Objects with OOP Concepts
// // Pick any 3 real-life objects (e.g., smartphone, bicycle, school), and for each:

// // List at least 3 properties (attributes).
// // List at least 3 behaviors (methods).
// // Write which OOP principle each property or behavior best represents and why.
// // 2. Draw a Diagram of an OOP Modeled System

// /**** 
//  First -  Smart Phone 
//  Properties : Screen ,Sound ,Camera -- Abstraction OOP
//  Behaviours/method : Call, Click Photo , Record Audio - Abstraction OOP

//  */             +----------------+
//              |     Person     |  <-- superclass
//              |----------------|
//              | - name         |
//              | - id           |
//              |----------------|
//              | + getInfo()    |
//              +--------^-------+
//                       |
//           +-----------+-----------+
//           |                       |
//      +---------+             +---------+
//      | Member  |             | Staff   |
//      |---------|             |---------|
//      | - role  |             | - role  |
//      |---------|             |---------|
//      | +takeBook()           | +giveBook()
//      | +returnBook()         | +collectBook()
//      +---------+             +---------+
                      
                      
//   +----------------+
//   |     Book       |
//   |----------------|
//   | - name         |
//   | - color        |
//   | - author       |
//   | - id           |
//   | - page         |
//   |----------------|
//   | +getDetails()  |
//   +----------------+

// Library (composition)
//   contains Books, Members, Staff


// . Compare OOP vs Functional Thinking
// Choose a simple system (e.g., a To-Do app or Alarm Clock) and:

// Describe how you’d design it using OOP (with objects)

// For todo on OOP i will Create a class name tasks -
// that will have tasks to store all the task
// and each task will inherit from a object name task - which have name ,status
// and method to get details and modify status
// on tasks class we will have methods to add remove and delte which will modify the array
// Describe how you’d design it using Functional Programming (with functions)
// You don’t have to write code — just use words and bullets.

// 5. Object vs Class vs Function – Explain Like a Teacher
// Imagine you’re teaching a 10-year-old:

// What is a Class?
// What is an Object?
// What is a Function?
// Use simple language, drawings, or emojis if needed.