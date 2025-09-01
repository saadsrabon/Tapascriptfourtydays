const message = "I can do it";

function sum(a, b) {
    const result = a + b;
    return result;
}

function mul(a, b) {
    const result = a * b;
    return result;
}
function calc(a, b) {
    return (sum(a, b) + mul(a,b))/2;
}

function getResult(a, b) {
    return calc(a, b);
}

getResult(8, 5);

// GC
//  CP 
//   message = undefined
//   f() body for sum 
//   f(mul) body for mul
//   f(calc) body for calc
//   f() body getResult()
//  EP
//   message =  "I can do it"
//  FEC forGetResult --
    
//        Cp-
//          a-undifined
//          b- undifined
          
//          Ep-
//          a=8 ,b=5;
//           FECcal-
//           Cp-
//          a-undifined
//          b- undifined
          
//          Ep-
//          a=8 ,b=5;
//           FEC sum- 
//            cp
//              result = indefined
//                a =undefinded
//                b = undefined
//              ec
//                 result = 13
//                a =5
//                b = 8
              
               
              
            