// let a;
a();
function a (){
    console.log(b)
}
var b;
const c= "saad"


// So in execution context here function hoisting is done this way
// let a;
// var b;
// const c= "saad"
// a();

// GEC
//  CP 
//   a= undefined
//   b= undefined
//   c= "saad"
//  EP
   //fec a() body for a
     //cp
     /