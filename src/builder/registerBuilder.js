import {Users} from '../models/user.js';

/**
 * @param {*} name
 * @param {*} email
 * @param {*} password
 */
export async function addUser(name, email, password) {
    return new Users({
        name: name,
        email: email,
        password: password,
    }).save();
}
