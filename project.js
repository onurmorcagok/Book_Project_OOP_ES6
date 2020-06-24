const form = document.getElementById("book-form");
const titleElement = document.querySelector("#title");
const authorElement = document.querySelector("#author");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-books");

eventListeners();

function eventListeners() {

    form.addEventListener("submit", addBook);
    document.addEventListener("DOMContentLoaded", function () {

        let books = Storage.getBooksFromStorage();
        UI.loadAllBooks(books);
    })
}

function addBook(e) {

    title = titleElement.value;
    author = authorElement.value;
    url = urlElement.value;

    if (title === "" || author === "" || url === "") {

        displayMessages("Lütfen tüm alanları eksiksiz doldurunuz.", "danger");

    } else {

        const newBook = new Book(title, author, url);

        UI.addBookToUI(newBook);

        Storage.addBookToStorage(newBook);

        UI.displayMessages("Kitap listeye başarıyla eklendi.", "success");
    }

    UI.clearInputs(titleElement, authorElement, urlElement);

    e.preventDefault();
}