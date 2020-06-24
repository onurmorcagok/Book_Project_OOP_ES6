class Storage {

    static addBookToStorage(newBook) {

        let books = this.getBooksFromStorage();

        books.push(newBook);

        localStorage.setItem("books", JSON.stringify(books));
    }

    static getBooksFromStorage() {

        let books;

        if (localStorage.getItem("books") === null) {

            books = [];

        } else {

            books = JSON.parse(localStorage.getItem("books"));
        }

        return books;
    }

    static deleteBookFromToStorage(bookTitle) {

        let books = this.getBooksFromStorage();

        // Splice Method

        books.forEach(function (book, index) {
            if (book.title === bookTitle) {
                books.splice(index, 1);
            }
        });

        localStorage.setItem("books", JSON.stringify(books));
    }
}