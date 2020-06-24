const form = document.getElementById("book-form");
const titleElement = document.querySelector("#title");
const authorElement = document.querySelector("#author");
const urlElement = document.querySelector("#url");
const pageElement = document.querySelector("#page");
const publisherElement = document.querySelector("#publisher");
const typeElement = document.querySelector("#type");
const cardBody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-books");

eventListeners();

function eventListeners() {

    form.addEventListener("submit", addBook);
    document.addEventListener("DOMContentLoaded", function () {

        let books = Storage.getBooksFromStorage();
        UI.loadAllBooks(books);
    });

    cardBody.addEventListener("click", deleteBook);
    clear.addEventListener("click", clearAllBook);
}

function addBook(e) {

    title = titleElement.value;
    author = authorElement.value;
    url = urlElement.value;
    page = pageElement.value;
    publisher = publisherElement.value;
    type = typeElement.value;

    if (title === "" || author === "" || url === "" || page === "" || publisher === "" || type === "") {

        UI.displayMessages("Lütfen tüm alanları eksiksiz doldurunuz.", "danger");

    } else {

        const newBook = new Book(title, author, url, page, publisher, type);

        UI.addBookToUI(newBook);

        Storage.addBookToStorage(newBook);

        UI.displayMessages("Kitap listeye başarıyla eklendi.", "success");
    }

    UI.clearInputs(titleElement, authorElement, urlElement, pageElement, publisherElement, typeElement);

    e.preventDefault();
}

function deleteBook(e) {

    if (e.target.id === "delete-kitap") {

        UI.deleteBookFromUI(e.target);
        Storage.deleteBookFromToStorage(e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent);

        UI.displayMessages("Kitap başarıyla silindi.", "success");
    }
}

function clearAllBook() {

    UI.clearAllBooksFromUI();
    Storage.clearAllBooksFromStorage();
}