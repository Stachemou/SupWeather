import OK from 'http-status-code';

/**
 * register controller
 * @param {*} req
 * @param {*} res
 */
export async function registerController(req, res) {
    try {
        console.log(req.body);
        return res.status(OK).json({result: 'ok'});
    } catch (error) {
        return error;
    }
}
