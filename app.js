const dialog = document.querySelector('dialog');
const showButton = document.querySelector('.open-dialog');
const cancelButton = document.querySelector('.cancel-btn');
const addBookButton = document.querySelector('.add-book-btn');

showButton.addEventListener("click", () => {
    dialog.showModal();
  });

  cancelButton.addEventListener("click", (e) => {
    e.preventDefault();
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
const book2 = new Book('Harry Potter', 'J.K. Rowling', '223 pages', "not read yet");
myLibrary.push(book2);


myLibrary.forEach((item) =>{
    const newDiv = document.createElement('div');
    newDiv.classList.add('book-card');
    const paraTitle = document.createElement('p');
    const paraAuthor = document.createElement('p');
    newDiv.appendChild(paraTitle);
    newDiv.appendChild(paraAuthor);
    const nodeTitle = document.createTextNode("Title: " + item.title)
    paraTitle.appendChild(nodeTitle);
    const nodeAuthor = document.createTextNode("Author:" + item.author);
    paraAuthor.appendChild(nodeAuthor);
    const element = document.querySelector('.book-container');
    element.appendChild(newDiv);
    console.log(item);
});


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
    var libraryLength = myLibrary.length-1;
    dialog.close();

    const newDiv = document.createElement('div');
    newDiv.classList.add('book-card');
    const paraTitle = document.createElement('p');
    const paraAuthor = document.createElement('p');
    newDiv.appendChild(paraTitle);
    newDiv.appendChild(paraAuthor);
    const nodeTitle = document.createTextNode("Title: " + myLibrary[libraryLength].title)
    paraTitle.appendChild(nodeTitle);
    const nodeAuthor = document.createTextNode("Author:" + myLibrary[libraryLength].author);
    paraAuthor.appendChild(nodeAuthor);
    const element = document.querySelector('.book-container');
    element.appendChild(newDiv);
      })

      