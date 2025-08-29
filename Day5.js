// 1. Generate a Pyramid Pattern using Nested Loop as it is shown below:
// *
// * *
// * * *
// * * * *
// * * * * *

for (let i = 0; i <= 5; i++) {
    let pyramid = "";
    for (let j = 0; j <= i; j++) {
        pyramid += "*";
        console.log(pyramid);
    }
}


for(let i = 1 ; i<=10; i++)
{
  console.log(i*3);
}

let sum  =0;
for(let i = 1; i<=100; i++ )
{ 
    
    if(i%2==0){
       sum +=i;
    }
}
console.log(sum)

// for loop when we exactly know how many times we are gonna use it
// while loop is we dont know how many time but our base case need to meet
//do while loop ensures it will run atleast once