const Library = [
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



// JSON.parse(localStorage.getItem('Library')).map(object => {
//     book.innerHTML = 
//         `<ul>
//             <li>
//             Title: ${object.title}
//             </li>
//             <li>
//             Author: ${object.author}
//             </li>
//             <li>
//             Pages: ${object.pages}
//             </li>
//             <li>
//             Read: ${object.read}
//             </li>
//          </ul>`;
//     bookshelf.appendChild(book.cloneNode(true));
// });

const bookshelf = document.querySelector(".bookshelf");
const book = document.createElement("li");
const openFormBtn = document.getElementById('openForm');
const modal = document.getElementById('simpleModal');
const submitBtn = document.getElementById('submitbtn');
const form = document.getElementById('popupform');

if (!localStorage.getItem('Library')) {
    JSON.parse(localStorage.getItem('Library')).map(object => {
        const book = document.createElement("li");
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
    });
    
} else {
    localStorage.setItem('Library', JSON.stringify(Library));
    JSON.parse(localStorage.getItem('Library')).map(object => {
        const book = document.createElement("li");
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
    });
};

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
form.addEventListener('submit', function(event) {
    console.log('testing');
    console.log(document.getElementsByTagName('input').value);
    let title = document.getElementsByTagName('input')[0].value;
    let author = document.getElementsByTagName('input')[1].value;
    let pages = document.getElementsByTagName('input')[2].value;
    let read = document.getElementsByTagName('input')[3].value;
    addBook(title, author, pages, read);
    event.preventDefault();
});





// book.classList.add('book');


// Library.map(object => {
//     book.innerHTML = 
//         `<ul>
//             <li>
//             Title: ${object.title}
//             </li>
//             <li>
//             Author: ${object.author}
//             </li>
//             <li>
//             Pages: ${object.pages}
//             </li>
//             <li>
//             Read: ${object.read}
//             </li>
//          </ul>`;
//     bookshelf.appendChild(book.cloneNode(true));
//         }
    
//     )

class Book{
    constructor(title, author, pages, read) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
    }
    info() {
        console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${ this.read ? 'read' : 'not read yet'}`) 
    }
}

function addBook(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);
    Library.push(newBook);
    localStorage.setItem('Library', JSON.stringify(Library));
    const book = document.createElement("li");
    book.innerHTML = 
        `<ul>
            <li>
            Title: ${newBook.title}
            </li>
            <li>
            Author: ${newBook.author}
            </li>
            <li>
            Pages: ${newBook.pages}
            </li>
            <li>
            Read: ${newBook.read}
            </li>
         </ul>`;
    bookshelf.appendChild(book.cloneNode(true));
}

