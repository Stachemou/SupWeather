import OK from 'http-status-code';

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
