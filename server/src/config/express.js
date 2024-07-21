const express = require('express');
const cookieParser = require('cookie-parser');

const { session } = require('../middlewares/session');

const secret = 'Super secr3t';

function configExpress(app) {

    app.use(cookieParser({ secret }));
    app.use(session());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

}

module.exports = { configExpress };