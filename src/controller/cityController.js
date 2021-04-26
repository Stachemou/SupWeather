import {OK, BAD_REQUEST, INTERNAL_SERVER_ERROR, CREATED} from 'http-status-codes';

import {getAllCities, createCity} from '../builder/cityBuilder.js';
import {check} from '../services/check.js';

/**
 * city controller
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
    await getAllCities(userId).then((val) => res.status(OK).json({...(val)}),
    ).catch(
        (err) => {
            res.status(INTERNAL_SERVER_ERROR).send({'state': false, 'message': err.message});
        },
    );
}

/**
 * city controller
 * @param {*} req
 * @param {*} res
 */
 export async function postCityController(req, res) {
    const checkParams = check(req, ['name']);
    if (checkParams !== null) {
        const err = {'state': false, 'message': 'bad request'};
        console.error(err);
        res.status(BAD_REQUEST).send(err);
        return;
    }
    await createCity(req.body.name, req.body.temp, req.body.userid)
    .then((val) => res.status(CREATED).json({...(val._doc)}),
    ).catch(
        (err) => {
            res.status(INTERNAL_SERVER_ERROR).send({'state': false, 'message': err.message});
        },
    );
}


/**
 *
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
