class UI {

    static addBookToUI(newBook) {

        const bookList = document.getElementById("books");

        bookList.innerHTML +=

            `
        <tr>
        <td><img src="${newBook.url}" class="img-fluid img-thumbnail"></td>
        <td>${newBook.title}</td>
        <td>${newBook.author}</td>
        <td><a href="#" id = "delete-kitap" class = "btn btn-danger">Kitap Sil</a></td>
        </tr>
        `
    }

    static loadAllBooks(books) {

        const bookList = document.getElementById("books");

        books.forEach(function (book) {

            bookList.innerHTML +=
                `
            <tr>
            <td><img src="${book.url}" class="img-fluid img-thumbnail"></td>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td><a href="#" id = "delete-kitap" class = "btn btn-danger">Kaldır</a></td>
            </tr>
            `
        });
    }

    static deleteBookFromUI(element) {

        element.parentElement.parentElement.remove();
    }

    static clearAllBooksFromUI() {

        const bookList = document.getElementById("books");

        if (confirm("Tüm kitapları silmek istediğinize emin misiniz ?")) {

            while (bookList.firstElementChild != null) {
                bookList.removeChild(bookList.firstElementChild);
            }
        }
    }

    static clearInputs(element1, element2, element3) {

        element1.value = "";
        element2.value = "";
        element3.value = "";

    }

    static displayMessages(message, type) {

        const cardBody = document.querySelector(".card-body");

        // Div created

        const alert = document.createElement("div");

        alert.className = `alert alert-${type}`;
        alert.textContent = message;

        cardBody.appendChild(alert);

        setTimeout(function () {
            alert.remove();
        }, 1000);
    }
}