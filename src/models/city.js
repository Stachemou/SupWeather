import mongoose from 'mongoose';


const citySchema = new mongoose.Schema({
    name: {type: String, default: ''},
    temp: {type: String, default: ''},
    userid: {type: String, default: ''},
});

export const Cities = mongoose.model('City', citySchema, 'cities');
