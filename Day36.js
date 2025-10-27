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
function countandShow(e) {
  let string = new String(e.target.value)
  if (string.length >= 200) {
    alert('Warning: Keep it 200')
  }
  showCount(string.length);
}
const throttledFunc = throttle(countandShow,5000)
const debouncedFubc = funcdebounce(countandShow,500)
input.addEventListener('keyup',debouncedFubc )
//show the count
function showCount(length) {
  counttext.innerText = length;
}
//write throttle function use that

function throttle(fn, interval) {
  let lastTtime = 0;
  return function (...args) {
    let now = Date.now();
    if (now - lastTtime >= interval) {
      lastTtime =now;
      return fn.apply(this, args)
    }
  }
}

//debounce function --
function funcdebounce (fn,delay){
  let timer;
  return function(...args)
  {
    clearTimeout(timer)
   timer = setTimeout(()=>{
      fn.apply(this,args)
    },delay)
  }
}
