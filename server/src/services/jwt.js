const jwt = require('jsonwebtoken');

const secret = 'super secr3t';

function createToken(userData) {

    const payload = {
        email: userData.email,
        username: userData.username,
        _id: userData._id
    };

    const token = jwt.sign(payload, secret,
        {
            expiresIn: '1d'
        });
    return token;
}

function verifyToken(token) {
    const data = jwt.verify(token, secret);
    return data;
}


function decodeToken(req) {

    let token = req.headers['x-authorization'];
    const userData = jwt.decode(token);

    return userData;
}

module.exports = { createToken, verifyToken, decodeToken };