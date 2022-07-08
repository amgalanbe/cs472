const express = require('express');
const path = require('path');

const User = require('../models/user');

const options = {
    'caseSensitivity': false,
    'strict': false
};
const router = express.Router(options);

router.get('/users', (req, res, next) => {
    res.status(500).sendFile(path.join(__dirname, '..', 'views', 'users.html'));
});

router.get('/users/:userId', (req, res, next) => {
    const user = User.getUserById(req.params.userId);
    res.json(200, user);
});

module.exports = router;