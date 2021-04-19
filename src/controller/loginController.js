import {OK} from 'http-status-code';

/**
 * login
 * @param {*} req
 * @param {*} res
 */
async function loginController(req, res) {
    console.log(req.body);
    return res.status(OK).json({result: 'ok'});
}

module.exports = {
    loginController,
};
