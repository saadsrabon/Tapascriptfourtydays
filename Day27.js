function f1() {
    console.log('f1');
}

function f2() {
    console.log('f2');
}

function f3() {
    console.log('f3');
}

function f4() {
    console.log('f4');
}

// console.log("Let's do it!");

// setTimeout(function() {f1();}, 0);

// f4(); /// will call first console.log(f4)

// setTimeout(function() {f2();}, 5000);

// setTimeout(function() {f3();}, 3000);

// f4,f1,f3,f2


function fs1() {
    console.log('f1');
}

console.log("Let's do it!");

// setTimeout(function() {console.log('in settimeout');}, 0);

// fs1();
// fs1();
// fs1();
// fs1();


//  JavaScript is single-threaded //true
//  By default, JavaScript is synchronous //true
//  Only promises make JavaScript asynchronous //false
//  All function callbacks are asynchronous //false


// (_) JavaScript Function Execution Stack(Call Stack) never gets empty. //false
// (_) The job queue gets higher priority than the callback queue. //true
// (_) The only job of Event Loop is to manage the Call Stack //false
// (_) The StackOverflow exception is random. //false
// 5. Guess the output

const tom = () => console.log('Tom');

const jerry = () => console.log('Jerry');

const cartoon = () => {
  console.log('Cartoon');

  setTimeout(tom, 5000);

  new Promise((resolve, reject) =>
    resolve('should it be right after Tom, before Jerry?')
  ).then(resolve => console.log(resolve))

  jerry();
}

// cartoon();  
// Cartoon , jerry ,should it be right after Tom, before Jerry? ,tom
const f1 = () => {
    console.log('f1');
    f2();
}
const f2 = () => console.log('f2');
const f3 = () => console.log('f3');
const f4 = () => console.log('f4');

f4();

setTimeout(f1, 0);
new Promise((resolve, reject) => {
    resolve('Sonic');
}).then(result => console.log(result));

setTimeout(f3, 0);
new Promise((resolve, reject) => {
    resolve('Albert');
}).then(result => console.log(result));
// f4 ,sonic,albert ,f1,f2,f3