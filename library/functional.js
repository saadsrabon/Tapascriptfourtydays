


// Role switching functionality
const adminRole = document.getElementById('admin-role');
const memberRole = document.getElementById('member-role');
const adminSection = document.getElementById('admin-section');
const memberSection = document.getElementById('member-section');

adminRole.addEventListener('click', () => {
    adminRole.classList.add('bg-primary', 'text-white');
    adminRole.classList.remove('text-gray-600');
    memberRole.classList.remove('bg-primary', 'text-white');
    memberRole.classList.add('text-gray-600');

    adminSection.classList.remove('hidden');
    memberSection.classList.add('hidden');
    

    loggedInUser('admin');
});

memberRole.addEventListener('click', () => {
    memberRole.classList.add('bg-primary', 'text-white');
    memberRole.classList.remove('text-gray-600');
    adminRole.classList.remove('bg-primary', 'text-white');
    adminRole.classList.add('text-gray-600');

    memberSection.classList.remove('hidden');
    adminSection.classList.add('hidden');
    loggedInUser('member')
    
});

// Books Array 
let books =[];
function loggedInUser(role) {

     localStorage.clear()

     if(role==='admin'){
        localStorage.setItem('admin', JSON.stringify({
        name: "Saad",
        email: "saadsrabon2@gmail.com"
    }))
     }else{
        localStorage.setItem('member', JSON.stringify({
        name: "member",
        email: "saadsrabon2@gmail.com"
    }))
     }
    
    let currentUser = localStorage.getItem(role)

    //
    if (currentUser) {
        let data = JSON.parse(currentUser)
        document.getElementById('username').textContent = data.name
    }

}

//Funtionalities
//show books on the ui 

//add books 
addBookFormHandle
function addbook(book){
   let books = JSON.parse(localStorage.getItem("books")) ;
    books.push(book)
    localStorage.setItem("books",JSON.stringify(books))
   
}
//borrow book

//show available books
//show borrowed books   

