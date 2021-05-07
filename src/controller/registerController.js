import {CREATED, BAD_REQUEST, INTERNAL_SERVER_ERROR} from 'http-status-codes';

import {check} from '../services/check.js';
import {addUser} from '../builder/registerBuilder.js';
import {userExist} from '../services/check.js';
/**
 * register controller
 * @param {*} req
 * @param {*} res
 */
export async function registerController(req, res) {
    const checkParams = check(req, ['name', 'email', 'password']);
    if (checkParams !== null) {
        const err = {'state': false, 'message': 'bad request'};
        console.error(err);
        res.status(BAD_REQUEST).send(err);
        return;
    } else if (await userExist(req.body.name) !== null) {
        const err = {'state': false, 'message': 'this name is already used'};
        console.error(err);
        res.status(BAD_REQUEST).send(err);
        return;
    }

    await addUser(req.body.name, req.body.email, req.body.password)
        .then((val) => res.status(CREATED).json({result: val}),
    ).catch(
        (err) => {
            res.status(INTERNAL_SERVER_ERROR).send({'state': false, 'message': err.message});
        },
    );
}
