import express from 'express';

import {cityController} from '../controller/cityController.js';
export const homeRouter = new express.Router();


homeRouter.post('/', cityController);

