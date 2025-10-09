const li = document.querySelectorAll('li');

console.log(li)
li.forEach(i=>{
    console.log(i)
    i.addEventListener('click',function(){
        li.forEach(i=>{
         i.classList.remove('active')
        });
        
        this.className = "active"
    })
})