import {OK, BAD_REQUEST, INTERNAL_SERVER_ERROR} from 'http-status-codes';

import {check, loginCheck} from '../services/check.js';

/**
 * login controller
 * @param {*} req
 * @param {*} res
 */
export async function loginController(req, res) {
    console.log(req.body);
    const checkParams = check(req, ['name', 'password']);
    if (checkParams !== null) {
        const err = {'state': false, 'message': 'bad request'};
        console.error(err);
        res.status(BAD_REQUEST).send(err);
        return;
    }
    await loginCheck(req.body.name, req.body.password)
        .then((val) => {
            if (val) {
                res.status(OK).send({token: 'test123', user: val});
            } else {
                res.status(BAD_REQUEST).send({error: 'Error'});
            }
        },
        ).catch(
            (err) => {
                res.status(INTERNAL_SERVER_ERROR).send({'state': false, 'message': err.message});
            },
        );
}
