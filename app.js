const dialog = document.querySelector('dialog');
const showButton = document.querySelector('.open-dialog');
const cancelButton = document.querySelector('.cancel-btn');
const addBookButton = document.querySelector('.add-book-btn');

showButton.addEventListener("click", () => {
    dialog.showModal();
  });

  cancelButton.addEventListener("click", () => {
    dialog.close();
  })

const myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
       return this.title + " by " + this.author + ", " + this.pages + ", " + this.read
    };
}

const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', '295 pages', "not read yet");
myLibrary.push(book1);
console.log(myLibrary);

function addBookToLibrary(){
    let newBook = new Book (
        document.getElementById('book-title').value,
        document.getElementById('book-author').value,
        document.getElementById('book-pages').value,
        document.getElementById('book-read').value);
myLibrary.push(newBook);
    }


addBookButton.addEventListener("click", (e) => {
    e.preventDefault();
    addBookToLibrary();
    console.log(myLibrary)
    dialog.close();
    }

)