const dialog = document.querySelector('dialog');
const showButton = document.querySelector('.open-dialog');
const cancelButton = document.querySelector('.cancel-btn');
const addBookButton = document.querySelector('.add-book-btn');
const removeButton = document.querySelector('.remove-button');

showButton.addEventListener("click", () => {
    dialog.showModal();
  });

  cancelButton.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.close();
  })

const myLibrary = [];

function Book(id, title, author, pages, read){
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
       return this.title + " by " + this.author + ", " + this.pages + ", " + this.read
    };
}

const book1 = new Book(Math.floor(Date.now()*Math.random()).toString(), 'The Hobbit', 'J.R.R. Tolkien', '295 pages', "Read");
myLibrary.push(book1);
const book2 = new Book(Math.floor(Date.now()*Math.random()).toString(), 'Harry Potter', 'J.K. Rowling', '223 pages', "Unread");
myLibrary.push(book2);


myLibrary.forEach((item) =>{
    const element = document.querySelector('.book-container');
    const newDiv = document.createElement('div');
    const paraTitle = document.createElement('p');
    const paraAuthor = document.createElement('p');
    const nodeTitle = document.createTextNode("Title: " + item.title)
    const nodeAuthor = document.createTextNode("Author:" + item.author);
    const deleteButton = document.createElement('button')
    const readButton = document.createElement('button');
    
    newDiv.classList.add('book-card');
    newDiv.appendChild(paraTitle);
    newDiv.appendChild(paraAuthor);
    paraTitle.appendChild(nodeTitle);
    paraAuthor.appendChild(nodeAuthor);
    deleteButton.innerHTML= '<img src="images/trash-can-outline.svg" del-date="'+ item.id +'"/>';
    deleteButton.classList.add('remove-button');
    newDiv.appendChild(deleteButton);
    readButton.innerHTML="Read";
    newDiv.appendChild(readButton);
    element.appendChild(newDiv);

    deleteButton.addEventListener('click',(e)=>{
      element.removeChild(newDiv);
      
        var delDate = e.target.getAttribute('del-date');
        console.log(delDate);
        let index = myLibrary.map((item) => item.id).indexOf(delDate);
        myLibrary.splice(index,1);
        console.log(index);
        console.log(myLibrary)
      })

    readButton.addEventListener('click', () =>{
      if(item.read === "Unread"){
        item.read = "Read";
        readButton.innerHTML = "Unread";
        console.log(myLibrary);
      } else if(item.read === "Read"){
        item.read = "Unread";
        readButton.innerHTML = "Read";
        console.log(myLibrary);
      }
    })

    if(item.read === "Unread"){
      readButton.innerHTML = "Read"
    } else{
      readButton.innerHTML = "Unread"
    };
});


function addBookToLibrary(){

    let newID = Math.floor(Date.now()*Math.random()).toString();

    let newBook = new Book (
        newID,
        document.getElementById('book-title').value,
        document.getElementById('book-author').value,
        document.getElementById('book-pages').value,
        document.getElementById('book-read').value);
myLibrary.push(newBook);

    var libraryLength = myLibrary.length-1;

    const element = document.querySelector('.book-container');
    const newDiv = document.createElement('div');
    const paraTitle = document.createElement('p');
    const paraAuthor = document.createElement('p');
    const nodeTitle = document.createTextNode("Title: " + myLibrary[libraryLength].title)
    const nodeAuthor = document.createTextNode("Author:" + myLibrary[libraryLength].author);
    const deleteButton = document.createElement('button')
    const readButton = document.createElement('button');

    
    newDiv.classList.add('book-card');
    newDiv.appendChild(paraTitle);
    newDiv.appendChild(paraAuthor);
    paraTitle.appendChild(nodeTitle);
    paraAuthor.appendChild(nodeAuthor);
    deleteButton.innerHTML= '<img src="images/trash-can-outline.svg" del-date="'+ newID +'"/>';
    deleteButton.classList.add('remove-button');
    newDiv.appendChild(deleteButton);
    readButton.innerHTML= "Read";
    readButton.setAttribute("del-date", newID);
    newDiv.appendChild(readButton);
    element.appendChild(newDiv);

    deleteButton.addEventListener('click',(e)=>{
      element.removeChild(newDiv);
      
        var delDate = e.target.getAttribute('del-date');
        console.log(delDate);
        let index = myLibrary.map((item) => item.id).indexOf(delDate);
        myLibrary.splice(index,1);
        console.log(index);
        console.log(myLibrary)
      })

      readButton.addEventListener('click', (e) =>{
        var delDate = e.target.getAttribute('del-date');
        console.log(delDate);
        let index = myLibrary.map((item) => item.id).indexOf(delDate);
        console.log(index);
        if(myLibrary[index].read === "Unread"){
          myLibrary[index].read = "Read";
          readButton.innerHTML = "Unread";
          console.log(myLibrary);
        } else if(myLibrary[index].read === "Read"){
          myLibrary[index].read = "Unread";
          readButton.innerHTML = "Read";
          console.log(myLibrary);
        }
      })
  
      function updateReadStatus(){
        if(myLibrary[libraryLength].read === "Unread"){
          readButton.innerHTML = "Read"
        } else {
          readButton.innerHTML = "Unread"
        }
      }

      updateReadStatus();
    }


addBookButton.addEventListener("click", (e) => {
    e.preventDefault();
    addBookToLibrary();
    console.log(myLibrary)
    dialog.close();
      })