let Library = [
    {
        title: 'Politics of Waystar', 
        author: 'Shiv Roy', 
        pages: 394, 
        read: true,
    }, 
    {
        title: 'Succession', 
        author: 'Kendall Roy', 
        pages: 281, 
        read: true,
    }, 
    {
        title: 'Hedonism', 
        author: 'Romulus Roy', 
        pages: 202, 
        read: false,
    },
];
const bookshelf = document.querySelector(".bookshelf");
const book = document.createElement("li");
const openFormBtn = document.getElementById('openForm');
const modal = document.getElementById('simpleModal');

function openModal(){
    modal.style.display = 'block';
}

function closeModal(e){
    if(e.target == modal){
        modal.style.display = 'none';
    }
}

openFormBtn.addEventListener('click', openModal);
window.addEventListener('click', closeModal);




book.classList.add('book');

Library.map(object => {
    book.innerHTML = 
        `<ul>
            <li>
            Title: ${object.title}
            </li>
            <li>
            Author: ${object.author}
            </li>
            <li>
            Pages: ${object.pages}
            </li>
            <li>
            Read: ${object.read}
            </li>
         </ul>`;
    bookshelf.appendChild(book.cloneNode(true));
        }
    
    )

function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${ this.read ? 'read' : 'not read yet'}`) 
    }
}

function addBook(title, author, pages, read) {
    Library.push(Book(title, author, pages, read));
}