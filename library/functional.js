


// Role switching functionality
const adminRole = document.getElementById('admin-role');
const memberRole = document.getElementById('member-role');
const adminSection = document.getElementById('admin-section');
const memberSection = document.getElementById('member-section');
  const bookContainer = document.getElementById('book-container')
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

const form = document.getElementById("add-form")
const submitBtn = document.getElementById("submit-btn")

form.addEventListener('submit',addBookFormHandle)
function addBookFormHandle(event){
    event.preventDefault()
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data)
    addbook(data);
}
function addbook(book){
   let id = crypto.randomUUID()
   let books = JSON.parse(localStorage.getItem("books"))|| [] ;
    book ={...book ,id,isavailable:true}
    books.push(book)
    localStorage.setItem("books",JSON.stringify(books))
    renderAvailableBooks()
}
//borrow book

function borrowBook (bookId){
  //chek for the user an
  let user = JSON.parse(localStorage.getItem('admin') )|| JSON.parse(localStorage.getItem('member'));

 if(user.borrowItem){
    user.borrowItem=[user.borrowItem,...bookId]
 }else{
    user.borrowItem=[bookId];
 }

  //
  localStorage.getItem('admin')?JSON.stringify(localStorage.setItem('admin',user)):JSON.stringify(localStorage.setItem('member',user));

  /// find out the book and change its isavailable to false
 let books = JSON.parse(localStorage.getItem("books"));
 let newBooks =books.map(b=> {
    if(b.id === bookId){
       return {...b,
        isavailable:false}
    }else{
        return b
    }
 })

  localStorage.setItem("books",JSON.stringify(newBooks))
  renderAvailableBooks()
}

bookContainer.addEventListener('click',(e)=>{
    const btn = e.target.closest('[data-action="borrow"]');
    const bookId =btn.dataset.id
    console.log(bookId);
    borrowBook(bookId)
})
//show available books
const renderAvailableBooks=()=>{
    // local storage theke  boi gula nibo
  
    let books = JSON.parse(localStorage.getItem('books'))|| [];
    console.log(books)
if(books.length ===0){
    bookContainer.innerHTML =`<p>No Books Available for now </p>`
}else{
    let html = books.map(book=>
        `<div class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
                        <div class="flex space-x-4">
                            <div class="w-16 h-20 bg-gray-100 rounded flex items-center justify-center">
                                <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                                </svg>
                            </div>
                            <div class="flex-1">
                                <h3 class="font-medium text-gray-900">${book?.title}</h3>
                                <p class="text-sm text-gray-600">${book?.author}</p>
                                <p class="text-xs text-gray-500">ISBN: ${book.isbn}</p>
                                <div class="mt-2 flex items-center justify-between">
                                    <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                       ${book.isavailable?"Available":"Not Available"}
                                    </span>
                                    <span class="text-sm text-gray-600">3 copies</span>
                                </div>
                                <button  data-action="borrow" data-id="${book.id}"  class="mt-2 w-full px-3 py-1 text-sm bg-primary text-white rounded hover:bg-blue-700 transition-colors duration-200">
                                    Borrow
                                </button>
                            </div>
                        </div>
                    </div>`
    ).join("")
    bookContainer.innerHTML =html;
}

}
//show borrowed books   
function showBorrowedBooks(){

    let borrowBooksIds =[];
    let member =JSON.parse(localStorage.getItem('member'));
    borrowBooksIds =member.borrowItem;
    let allbooks = JSON.parse(localStorage.getItem('books'))
    let matchedBooks = allbooks.filter(b=> borrowBooksIds.includes(b.id))
    let borrowBookContainer =document.getElementById('borrow-container')
    if(matchedBooks){
        matchedBooks.map(i=> `<div class="space-y-4">
                        <div class="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                            <div class="flex items-center space-x-4">
                                <div class="w-12 h-16 bg-gray-100 rounded flex items-center justify-center">
                                    <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="font-medium text-gray-900">The Great Gatsby</h3>
                                    <p class="text-sm text-gray-600">F. Scott Fitzgerald</p>
                                    <p class="text-xs text-gray-500">Borrowed: Jan 15, 2024</p>
                                </div>
                            </div>
                            <div class="text-right">
                                <p class="text-sm font-medium text-gray-900">Due: Feb 15, 2024</p>
                                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                    Active
                                </span>
                                <button class="mt-2 px-3 py-1 text-sm bg-primary text-white rounded hover:bg-blue-700 transition-colors duration-200">
                                    Return Book
                                </button>
                            </div>
                        </div>
                    </div>`)
    }
}
renderAvailableBooks()