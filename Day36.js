//First learn about the Debounce --
/***
 Debounce means don't act early 

 So in debounce we will call a function after a certain delay from last time it called
 */

//  function debounces (fn,delay){
//     let timer;

//     return function(...args){
//         clearTimeout(timer)
//         timer = setTimeout(()=>fn.apply(this,args),delay)
//     }
//  }

//  let btn = document.getElementById('dbtn')
//  btn.addEventListener(
//     'click',
//     debounces(() => console.log('saad'), 5000)
// );


// // Practice the Throttling
// /* 
//  So the key diffrence in throttling is the functions will call atleast once on that period of time
//  we basically limit how often a function will be executed in certain time of period

// */

// function throttle (fn, interval){
//    //
//    let lastcall =0;
//    return function(...args){
//     const now =Date.now()
//     if(now-lastcall>= interval){
//         lastcall =now
//      fn.apply(this,args)
//    }}
// }



///// Tasks////

/// First Cahce the Items
const input = document.getElementById('input')
const counttext = document.getElementById('count')
//add event listener to the input
function countandShow(e){
  let string = new String(e.target.value)
  if(string.length>=200){
   alert('Warning: Keep it 200')
  }
}
input.addEventListener('keyup',countandShow)
//show the count
//write throttle function use that