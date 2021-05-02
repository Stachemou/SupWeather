import {Users} from '../models/user.js';

/**
 * @param {*} name
 * @param {*} password
 */
export async function getUser(name, password) {
    return await Users.findOne({name: name, password: password}).exec();
}
