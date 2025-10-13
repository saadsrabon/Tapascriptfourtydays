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

const getUserDetails = async () => {
  try {
    const response = await fetch('https://jsonffplaceholder.typicode.com/users/1');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error('Error caught:', err.message);
  }
};

getUserDetails();



  const mockApi =async()=>{
    try{
          const res = await   fetch('/api/data')
//   .then(res => res.json())
   const data =  res.json()
    } catch(errr){
        console.log(errr)
    }
  }


