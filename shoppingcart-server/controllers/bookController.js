const Book = require('../models/book');

exports.getBooks = (req, res, next) => {
    res.status(200).json(Book.fetchAll());
}

exports.getBookById = (req, res, next) => {
    res.status(200).json(Book.findById(req.params.bookId));
}

exports.save = (req, res, next) => {
    const book = req.body;
    const savedProd = new Book(null, book.title, book.isbn, book.publishedDate, book.author).save();
    res.status(201).json(savedProd);
}

exports.update = (req, res, next) => {
    const book = req.body;
    const updatedProd = new Book(parseInt(req.params.bookId), book.title, book.isbn, book.publishedDate, book.author).update();
    res.status(200).json(updatedProd);
}

exports.deleteById = (req, res, next) => {
    Book.deleteById(req.params.bookId);
    res.status(200).end();
}