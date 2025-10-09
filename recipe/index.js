/// first load the Items from Json
let allRecipe =[];
const loadRecipe =()=>{
    //
    fetch('./recipe.json')
    .then(res=>res.json())
    .then(data=> {
        allRecipe =data.recipe;
        
        showDataOnUi(allRecipe)
    })
}
const container = document.querySelector('.results-grid')
function showDataOnUi(recipe)
{
 container.innerHTML =""
 const temp = document.createDocumentFragment();
 const cardTemplate = document.querySelector('.card')
/// Loop here
 recipe.forEach(element => {
  const clone = cardTemplate.content.cloneNode(true);

  // Update content
  const thumb = clone.querySelector('.thumb');
thumb.style.backgroundImage = `url(${element.image})`;
thumb.style.backgroundSize = 'cover';
thumb.style.backgroundPosition = 'center';

  clone.querySelector('.time').textContent = element.time;
  clone.querySelector('h3').textContent = element.name;
  clone.querySelector('p').textContent =element.instructions.slice(',').join()
  

temp.appendChild(clone)

 });

container.appendChild(temp)

}

/// Event listener for  Search
const searchInput = document.getElementById('search-input')
searchInput.addEventListener('input',()=>{
    const query = searchInput.value.toLowerCase();
 const newRecipe = allRecipe.filter(item =>
  item.name.toLowerCase().includes(query)
)
console.log(newRecipe)
    showDataOnUi(newRecipe)
})
loadRecipe()