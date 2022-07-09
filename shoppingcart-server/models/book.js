let books = [];
let idCounter = 1;

class Book {

    constructor(id, title, isbn, publishedDate, author) {
        this.id = id;
        this.title = title;
        this.isbn = isbn;
        this.publishedDate = publishedDate;
        this.author = author;
    }

    save() {
        this.id = idCounter++;
        books.push(this);
        return this;
    }

    update() {
        const index = books.findIndex(b => b.id === this.id);
        if (index > -1) {
            books.splice(index, 1, this);
            return this;
        } else {
            throw new Error('NOT Found');
        }

    }

    static fetchAll() {
        return books;
    }

    static findById(bookId) {
        const index = books.findIndex(b => b.id == bookId);
        if (index > -1) {
            return books[index];
        } else {
            throw new Error('NOT Found');
        }
    }

    static deleteById(bookId) {
        const index = books.findIndex(b => b.id == bookId);
        if (index > -1) {
            books = books.filter(b => b.id != bookId);
        } else {
            throw new Error('NOT Found');
        }
    }

}

new Book(null, 'Ulysses', '56861963417', new Date(1904, 5, 14), 'James Joyce').save();
new Book(null, 'Don Quixote', '18619722453', new Date(1612, 0, 1), 'Miguel de Cervantes' ).save();
new Book(null, 'One Hundred Years of Solitude', '18619543543', new Date(1967, 0, 1),'Gabriel García Márquez').save();
new Book(null, 'The Great Gatsby', '8648617574', new Date(1925, 3, 10) ,'F. Scott Fitzgerald').save();
new Book(null, 'Moby Dick', '45243272717', new Date(1851, 9, 18) ,'Herman Melville').save();

module.exports = Book;