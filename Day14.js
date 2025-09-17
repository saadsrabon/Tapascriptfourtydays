try {
    let r = p + 50;
    console.log(r);
} catch (error) {
    console.log("An error occurred:", error.name);
}


// 2. Write a function processPayment(amount) that checks if the amount is positive and not exceeding balance. If any condition fails, throw appropriate errors.

function processPayment(ammount) {
    let balance = 3000;
    try {
        if (ammount < 0) {
            throw new Error("The ammount is NEgative ")
        } else if (ammount > balance) {
            throw new Error("The ammount is exceeding ")
        }else{
            console.log("pass")
        }
    }catch(err){
        console.log(err.message)
    }
}

console.log(processPayment(5000))
console.log(processPayment(-500))