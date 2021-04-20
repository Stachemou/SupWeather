import OK from 'http-status-code';

/**
 * login controller
 * @param {*} req
 * @param {*} res
 */
export async function loginController(req, res) {
    try {
        console.log(req.body);
        return res.status(OK).json({result: 'ok'});
    } catch (error) {
        return error;
    }
}
