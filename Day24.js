function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const run =async()=>{
    await delay(1000);
    console.log("First");
    await delay(2000);
    console.log('second');
    await delay(3000);
    console.log('Third')
}

run()
// Use the public API https://jsonplaceholder.typicode.com/users/1 to fetch and display the user’s name, email, and address on the page

const getUserDetails = async()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1'); // will return a promise
    const data = await response.json();
    console.log(data);
}

getUserDetails()