import {Cities} from '../models/city.js';

/**
 * @param {*} id
 */
export async function getAllCities(id) {
    return await Cities.find({userid: id}).exec();
}

/**
 * @param {*} name
 * @param {*} userid
 */
 export async function createCity(name, userid) {
    return new Cities({
        name: name,
        userid: userid,
    }).save();
}

/**
 * @param {*} name
 * @param {*} userid
 * @param {*} id
 */
 export async function deleteCity(name, userid, id) {
    return Cities.deleteOne({name: name, userid: userid, _id: id}).exec();
}

