import express from 'express';

import {postCityController, getCityController, getAllCityController} from '../controller/cityController.js';
export const homeRouter = new express.Router();


homeRouter.post('/', postCityController);

homeRouter.get('/', getCityController);

homeRouter.get('/all', getAllCityController);

