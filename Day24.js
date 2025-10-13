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
