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


function updateFunction(name,email){
    let  findEmail = users.find(user=> user.email == email){
        users
    }
}