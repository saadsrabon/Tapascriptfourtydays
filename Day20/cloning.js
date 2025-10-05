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
