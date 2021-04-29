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
 * @param {*} id
 */
 export async function deleteCity(id) {
    return Cities.deleteOne({_id: id}).exec();
}

