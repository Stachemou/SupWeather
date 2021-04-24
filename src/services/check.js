// eslint-disable-next-line valid-jsdoc
/**
 * check params
 * @param {*} req
 * @param {*} bodyExpect
 */
export function check(req, bodyExpect) {
    const keys = Object.keys(req.body);
    let retrn = null;
    bodyExpect.forEach((key) => {
        if (!keys.includes(key)) {
            retrn = {
                error: 'Missing parameter' + key,
            };
        }
    });
    return retrn;
}
