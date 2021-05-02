import {getUser} from '../builder/loginBuilder.js';

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

/**
 * check user login
 * @param {*} name
 * @param {*} password
 */
export async function loginCheck(name, password) {
    const user = await getUser(name, password);
    console.log(user);
    return user;
}
