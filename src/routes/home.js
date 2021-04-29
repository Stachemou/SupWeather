import express from 'express';

import {
    postCityController,
    getCityController,
    getAllCityController,
    deleteCityController,
} from '../controller/cityController.js';

export const homeRouter = new express.Router();


homeRouter.post('/addcity', postCityController);

homeRouter.get('/', getCityController);

homeRouter.get('/all', getAllCityController);

homeRouter.delete('/delete', deleteCityController);

