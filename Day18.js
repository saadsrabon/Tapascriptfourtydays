const selectItem = document.getElementById('field');
const myForm =document.getElementById('myform')
// amar hsse ekta field Create korte hbe
function handleCreateFields(){
    console.log(selectItem.value);
    let itemName =selectItem.value;
    let createItem =document.createElement('input');
    createItem.setAttribute('type',itemName);
    myForm.appendChild(createItem);


}
selectItem.addEventListener('change',handleCreateFields)

console.log("hello")