const express = require('express');
const path = require('path');

const Product = require('../models/product');


const options = {
    'caseSensitivity': false,
    'strict': false
};
const router = express.Router(options);

router.get('/products', (req, res, next) => {
    console.log("presenting products");
    res.status(500).sendFile(path.join(__dirname, '..', 'views', 'products.html'));
});

router.get('/products/:productId', (req, res, next) => {
    const product = Product.getProductById(req.params.productId);
    res.json(200, product);
});

router.post('/products/create', (req, res, next) => {

})

module.exports = router;