import {CREATED} from 'http-status-code';

/**
 * login
 * @param {*} req
 * @param {*} res
 */
async function registerController(req, res) {
    console.log(req.body);
    return res.status(CREATED).json({result: 'ok'});
}

module.exports = {
    registerController,
};
