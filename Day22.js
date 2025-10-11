// Pass a function to greet a user and then thank them

const thank=(name,callback) =>
{
    console.log(`Hello ${name}`);
    callback()
}

thank('saad',()=>{
    console.log("Thank you");
})