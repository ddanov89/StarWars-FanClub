const { Router } = require('express');
const { body, validationResult } = require('express-validator');
const { createToken } = require('../services/jwt');
const { parseError } = require('../util');
const { login, register } = require('../services/user');

const userRouter = Router();


userRouter.post('/login', async (req, res) => {
    
        const { email, password } = req.body;

        try {
            const userInformation = await login(email, password);
            const token = createToken(userInformation);
            res.cookie('token', token);
            res.status(200).end();
        } catch (error) {
            res.json({ data: { email }, errors: parseError(error).errors });

        }
    });

userRouter.post('/register',
    body('email').trim().isLength({ min: 10 }).isEmail().withMessage('Email must be at least 10 characters long!'),
    body('username').trim().isLength({ min: 4 }).withMessage('Username must be at least 4 characters long!'),
    body('password').trim().isLength({ min: 4 }).withMessage('Password must be at least 4 characters long!'),
    body('repass').trim().custom((value, { req }) => {
        return value == req.body.password;
    }).withMessage('Passwords don\'t match!'),
    async (req, res) => {

        const { email, username, password } = req.body;

        try {

            const validation = validationResult(req);
            if (validation.errors.length) {
                throw validation.errors;
            }

            const userInformation = await register(email, username, password);
            const token = createToken(userInformation);
            res.cookie('token', token);
            res.status(200).end();
        } catch (error) {
            res.json( { data: { email, username }, errors: parseError(error).errors });
        }
    });
    userRouter.get('/logout', async (req, res) => {
        res.clearCookie('token');
        res.status(200).end();
    });


module.exports = { userRouter };