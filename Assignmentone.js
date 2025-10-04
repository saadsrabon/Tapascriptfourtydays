//
function createExpense(userName,budget){
    let expenses = [];
    function addExpense(expense)
    {
        expenses.push(expense);
        console.log(`${userName}'s budget is ${budget}`);
    };
    function removeExpense(id){
       let idToDelete = expenses.findIndex(item=>item.id===id);
       expenses.splice(idToDelete,1)

    }
    
    return{
        user:{
            name:userName,
            budget,
        },
        addExpense,
        expenses,
        removeExpense
    }
}

const tracker =createExpense("Saad",500);
console.log(tracker.user);
// console.log(tracker.addExpense( { id: 1, amount: 200, category: "Food", description: "Lunch" }));
tracker.addExpense({ id: 1, amount: 200, category: "Food", description: "Lunch" })
console.log(tracker.expenses)