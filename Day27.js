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

console.log("Let's do it!");

setTimeout(function() {f1();}, 0);

f4(); /// will call first console.log(f4)

setTimeout(function() {f2();}, 5000);

setTimeout(function() {f3();}, 3000);

// f4,f1,f3,f2