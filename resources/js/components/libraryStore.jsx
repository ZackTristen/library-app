import { makeAutoObservable } from "mobx";

class LibraryStore {
    books = [];

    authors = [];
    filteredField = "Все авторы";
    filteredBooks = [];

    constructor() {
        makeAutoObservable(this);
    }
    calcCountBooks = (name, symbol) => {
        let count = 0;
        this.books.forEach((book) => {
            if (book.author.includes(name) && symbol === "+") {
                count++;
            }
            if (book.author.includes(name) && symbol === "-") {
                count--;
            }
            return count;
        });
        return count;
    };

    deleteBook = (id) => {
        const bookAuthor = this.books.find((a) => a.id === id).author;
        this.calcCountBooks(bookAuthor.name, "-");

        this.books = this.books.filter((a) => a.id !== id);

        this.getFilteredBooks();
    };

    setFilterField = (filter) => {
        this.filteredField = filter;
    };

    submitChange = () => {
        this.getFilteredBooks();
    };
    changeFilterField = (filter) => {
        this.filteredField = filter;
    };

    getBook = (id) => {
        return this.books.find((a) => a.id === id);
    };
    getAuthor = (id) => {
        return this.authors.find((a) => a.id === id);
    };

    deleteAuthors = (id) => {
        this.authors = this.authors.filter((a) => a.id !== id);
    };

    addEditBook = (bookEdit) => {
        const indexEdit = this.books.findIndex(
            (book) => book.id === bookEdit.id
        );

        this.books.splice(indexEdit, 1, bookEdit);
    };
    addEditAuthor = (authorEdit) => {
        const indexEdit = this.authors.findIndex(
            (author) => author.id === authorEdit.id
        );
        this.authors.splice(indexEdit, 1, authorEdit);
    };

    addNewAuthor = (author) => {
        this.authors.push(author);
    };

    addNewBook = (book) => {
        this.books.push(book);
        let bookAuthor = this.books.find((a) => a.id === book.id).author;
        this.calcCountBooks(bookAuthor.name, "+");
    };

    getFilteredBooks = () => {
        if (this.filteredField === "") {
            this.filteredBooks = this.books.sort((a, b) =>
                a.title.localeCompare(b.title)
            );
        } else if (this.filteredField === "Все авторы") {
            this.filteredBooks = this.books.sort((a, b) =>
                a.title.localeCompare(b.title)
            );
        } else {
            let newBooks = [];
            this.books.forEach((book) => {
                if (book.author.includes(this.filteredField)) {
                    newBooks.push(book);
                }
            });
            this.filteredBooks = newBooks.sort((a, b) =>
                a.title.localeCompare(b.title)
            );
        }
    };
}
export default new LibraryStore();
