// Now, find and display the most frequently occurring word. Also put a count of occurance beside it.
const div = document.querySelector('div');
const textArray =div.innerText.split(" ");
 
const section =document.createElement("section")
section.innerText =`Last Occurence ${textArray[textArray.length - 1]} 
word Count is ${textArray.length}
`
document.body.appendChild(section)

// Hints:

// Use document.querySelector() or getElementById() to select the paragraph.
// Convert the text into an array of words.
// Use querySelector() to display the most frequent word along with the count inside another <div>.


// jebra

const ul = document.querySelectorAll('ul li');
const arrayUl =[...ul];
console.log(arrayUl)
for(let i =0; i<arrayUl.length; i++){
    if(i%2==0){
        arrayUl[i].style.color="white"
        arrayUl[i].style.backgroundColor = "black";

    }else{
        arrayUl[i].style.color="black"
        arrayUl[i].style.backgroundColor="white"
    }
}
document.querySelectorAll('ul li').forEach((li, i) => {
  li.style.color = i % 2 === 0 ? "white" : "black";
  li.style.backgroundColor = i % 2 === 0 ? "black" : "white";
});
