import {Cities} from '../models/city.js';

/**
 * @param {*} id
 */
export async function getAllCities(id) {
    return await Cities.find({userid: id}).exec();
}

/**
 * @param {*} name
 * @param {*} temp
 * @param {*} userid
 */
 export async function createCity(name, temp, userid) {
    return new Cities({
        name: name,
        temp: temp,
        userid: userid,
    }).save();
}
