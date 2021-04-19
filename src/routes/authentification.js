import express from 'express';

const authRouter = new express.Router();


authRouter.post('/login', connexionController);

authRouter.post('/register', registerController);

module.exports = authRouter;
