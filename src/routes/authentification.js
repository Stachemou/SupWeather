import express from 'express';

import {loginController} from '../controller/loginController.js';
import {registerController} from '../controller/registerController.js';

export const authRouter = new express.Router();


authRouter.post('/login', loginController);

authRouter.post('/register', registerController);

