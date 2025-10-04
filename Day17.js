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