const express = require('express');
const path = require('path');
const fs = require('fs');

const productRouter = require('./routes/productRouter');
const userRouter = require('./routes/userRouter');

const app = express();

const port = process.env.PORT || 3000;

app.use(productRouter);
app.use(userRouter);

//allow css images to go through
app.use('/css', express.static(path.join(__dirname, 'views', 'css')));
app.use('/images', express.static(path.join(__dirname, 'views', 'images')));

//error test
app.get('/generateError', (req, res, next) => {
    next('intentionally generated error');
});

app.get('/', (req, res, next) => {
    res.status(500).sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, '..', 'views', '404.html'));
});

function logErrors (err, req, res, next) {
    console.error(err.stack);
    next(err);
}

function clientErrorHandler (err, req, res, next) {
    let html = fs.readFileSync(path.join(__dirname, 'views', 'error.html'), 'utf-8');
    html = html.replace('{Error Message}', 'Something went wrong. Error code is ' + err);
    res.status(500).send(html);
}

app.use(logErrors);
app.use(clientErrorHandler);

app.listen(port, () => console.log('listening on ' + port));