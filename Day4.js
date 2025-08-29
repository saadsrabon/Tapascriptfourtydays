

// ## 1. What will be the output of this code snippet and why?
//  ```js
 let day = "Monday";

switch (day) {
    case "monday":
        console.log("It's the start of the week.");
        break;
    default:
        console.log("It's a normal day."); // this one will print
}
// ```

// ## 2. Build an ATM Cash Withdrawal System
// Rajan goes to the Axis bank ATM. He enters an amount to withdraw. The ATM only allows multiples of 100. Print “Withdrawal successful” if valid, otherwise print “Invalid amount”.
let ammount = 855;

if (ammount % 100 === 0) {
    console.log("Withdrawal successful");
} else {
    console.log("Invalid Ammount");
}
// ## 3. Build a Calculator with switch-case
// Write a simple calculator that takes an operator (+, -, , /, %) as input, and performs the operation on two numbers. Print the output on the console.
let operator;
switch(operator){
    case "+" :
        console.log( a+b);
        break
    case "-" :
        console.log(a-b);
        break;
    case "*" :
        console.log(a*b);
        break;
    case "/" :
    console.log(a/b);
    break;

    default:
        console.log("No Operator assigned")

}

// ## 4. Pay for your movie ticket
// Imagine, the INOX charges ticket prices based on age:
// - Children (<18 years): $3
// - Adults (18 - 60 years): $10
// - Seniors (60+ years): $8

// Write a program that prints the ticket price based on the person’s age.

// ## 5. Horoscope Sign Checker
// Write a program that prints the zodiac sign(Aries, Taurus, Gemini, etc.) based on a person’s birth month. Make it month bases, not date based. Like March and April borns are Aries, Aplil and May born are Taurus, and so on. Do not use if-else.

// ## 6. Which Triangle?
// A triangle has 3 sides. A Triangle type is determined by its sides:
// - All sides equal is called, `Equilateral Triangle`.
// - Two sides equal is called, `Isosceles Triangle`.
// - All sides different is called, `Scalene Triangle`.

// Take the sides of a triangle as input and write a program to determine the triangle type. Change the inputs everytime manually to see if the output changes correctly.