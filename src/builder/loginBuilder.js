import {Users} from '../models/user.js';
/**
 * @param {*} name
 * @param {*} notpassword
 */
export async function getUser(name) {
    return await Users.findOne({name: name}).exec();
}
