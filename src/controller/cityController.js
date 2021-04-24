import OK from 'http-status-code';
import {check} from '../services/check.js';
/**
 * city controller
 * @param {*} req
 * @param {*} res
 */
export async function cityController(req, res) {
    try {
        console.log(req.body);
        return res.status(OK).json({result: 'ok'});
    } catch (error) {
        return error;
    }
}

/**
 *
 * @param {*} req
 * @param {*} res
 */
export async function postCityController(req, res) {
    if (check !== null) {
        const err = {'state': false, 'message': 'bad request'};
        console.error(err);
        res.status(BAD_REQUEST).send(err);
        return;
    }

    await addCity(req.body).then((val) => res.status(CREATED).json({...(val.dataValues)}),
    ).catch(
        (err) => {
            res.status(INTERNAL_SERVER_ERROR).send({'state': false, 'message': err.message});
        },
    );
}
