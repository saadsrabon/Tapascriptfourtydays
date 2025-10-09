//Cache the template container
const template = document.getElementById('user-card');
// console.log(template);
// console.log(template.content);

const clone = template.content.cloneNode(true)// deep conpy
console.log(clone)

clone.querySelector('.name').textContent ="Jhon"
clone.querySelector('.email').textContent ="john@example.com"

document.getElementById('container').appendChild(clone);

const div = document.createElement('div');
div.innerHTML = "<p style='display:none'>Hidden</p><p>Visible</p>";

console.log(div.textContent);  // ?
console.log(div.innerText);    // ?


// Task Part --

//Cache the main divs 
const userTemplate =  document.getElementById('user-template');
const userContainer = document.getElementById('users-container');
const clonedUserTemplate = userTemplate.content.cloneNode(true);
console.log(clonedUserTemplate)
const users = [
  { name: "Alice", email: "alice@example.com" },
  { name: "Bob", email: "bob@example.com" },
  { name: "Charlie", email: "charlie@example.com" }
];

function createUsers (name ,email){
    clonedUserTemplate.querySelector('.name').textContent = name;
    clonedUserTemplate.querySelector('.email').textContent = email;
}

users.forEach(user=>{
    createUsers(user?.name,user?.email);
   
})
 userContainer.appendChild(clonedUserTemplate);


// function updateFunction(name,email){
//     let  findEmail = users.find(user=> user.email == email){
//         users
//     }
// }

// Task two 

let products = [
  { name: "Product 1", price: 100 },
  { name: "Product 2", price: 150 },
  { name: "Product 3", price: 200 },
 
];

//  clone the item
const productContainer = document.getElementById('product-container')
const productTemplate  = document.getElementById('product-template')
// console.log(productContainer)
/// we did create fragment and dudu clone the  node each time so that its not overwritten every time

function renderProducts(products){
    const fragment =document.createDocumentFragment();
    products.forEach(product=>{
        const clone = productTemplate.content.cloneNode(true);
        clone.querySelector('.name').textContent = product.name;
        clone.querySelector('.price').textContent = product.price;

        // Delete product 
        const removebtn =clone.querySelector('.remove-btn');
        console.log(removebtn)
        removebtn.addEventListener('click',()=>{
            products = products.filter(item => item.name != product.name);
            renderProducts(products)
        })
        

        fragment.appendChild(clone);
        
    })
    productContainer.innerHTML ="";
    productContainer.appendChild(fragment);

};



renderProducts(products)