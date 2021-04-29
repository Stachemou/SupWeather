import {OK, BAD_REQUEST, INTERNAL_SERVER_ERROR, CREATED} from 'http-status-codes';

import {getAllCities, createCity, deleteCity} from '../builder/cityBuilder.js';
import {check} from '../services/check.js';


// GET

/**
 * get all city controller
 * @param {*} req
 * @param {*} res
 */
export async function getAllCityController(req, res) {
    const userId = req.query.userid;
    if (userId === undefined) {
        const err = {'state': false, 'message': 'bad request'};
        console.error(err);
        res.status(BAD_REQUEST).send(err);
        return;
    }
    await getAllCities(userId).then((val) => res.status(OK).json(val),
    ).catch(
        (err) => {
            res.status(INTERNAL_SERVER_ERROR).send({'state': false, 'message': err.message});
        },
    );
}

/**
 * get city controller
 * @param {*} req
 * @param {*} res
 */
 export async function getCityController(req, res) {
    const checkParams = check(req, []);
    if (checkParams !== null) {
        const err = {'state': false, 'message': 'bad request'};
        console.error(err);
        res.status(BAD_REQUEST).send(err);
        return;
    }

    await addCity(req.body).then((val) => res.status(OK).json({...(val.dataValues)}),
    ).catch(
        (err) => {
            res.status(INTERNAL_SERVER_ERROR).send({'state': false, 'message': err.message});
        },
    );
}

// POST

/**
 * post city controller
 * @param {*} req
 * @param {*} res
 */
 export async function postCityController(req, res) {
    const checkParams = check(req, ['name', 'userid']);
    if (checkParams !== null) {
        const err = {'state': false, 'message': 'bad request'};
        console.error(err);
        res.status(BAD_REQUEST).send(err);
        return;
    }
    await createCity(req.body.name, req.body.userid)
    .then((val) => res.status(CREATED).json(val._doc),
    ).catch(
        (err) => {
            res.status(INTERNAL_SERVER_ERROR).send({'state': false, 'message': err.message});
        },
    );
}

// DELETE
/**
 * delete city controller
 * @param {*} req
 * @param {*} res
 */
export async function deleteCityController(req, res) {
    const userId = req.query.userid;
    const name = req.query.name;
    if (userId === undefined || name === undefined) {
        const err = {'state': false, 'message': 'bad request'};
        console.error(err);
        res.status(BAD_REQUEST).send(err);
        return;
    }
    await deleteCity(name, userId)
    .then((val) => res.status(OK).json(val),
    ).catch(
        (err) => {
            res.status(INTERNAL_SERVER_ERROR).send({'state': false, 'message': err.message});
        },
    );
}

