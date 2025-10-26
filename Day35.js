function makeMultipliers() {
  const result = [];
  for (let i = 1; i <= 3; i++) {
    result.push(function (num) {
      return num * i;
    });
  }
  return result;
}  /// var is function scoped we need to make it block scope

const [double, triple, quadruple] = makeMultipliers();

// console.log(double(2));  // Expected: 2 * 1 = 2
// console.log(triple(2));  // Expected: 2 * 2 = 4
// console.log(quadruple(2)); // Expected: 2 * 3 = 6

// 
for (var i = 0; i <= 3; i++) {
   let data =i; // take a temporary variable as it will reasign everytime
  setTimeout(function () {
    
    // console.log("Count:", data);
  }, 1000);
}

const config = {
  appName: "CoolApp",
  version: "1.0",
};

// function updateConfig(newConfig) {
//    let newConfig ={
//     ...config,
//     newConfig
//    }
//    return newConfig
// }

function updateConfig(newConfig) {
  Object.assign(config,newConfig)
}



updateConfig({ version: "2.0" });


function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data received");
    }, 1000);
  });
}

async function start() {
  try {
    const data = await fetchData().then(res => {
      console.log("Then block:", res); // it wil console
      throw new Error("Something went wrong!"); // and as we throwed and error here so it will go to the catch block
    });

    console.log("Data:", data);
  } catch (err) {
    console.error("Caught error:", err.message);
  }
}

start();






function cancellablePromise(executor) {
  let isCanceled = false;

  const promise = new Promise((resolve, reject) => {
    executor(
      value => !isCanceled && resolve(value),
      error => !isCanceled && reject(error)
    );
  });

  return {
    promise,
    cancel() {
      isCanceled = true;
    }
  };
}

const { promise, cancel } = cancellablePromise((resolve) => {
  setTimeout(() => resolve("Data received"), 3000);
});

promise.then(console.log);
setTimeout(cancel, 1000);

