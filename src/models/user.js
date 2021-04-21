import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
    name: {type: String, default: ''},
    email: {type: String, default: ''},
    password: {type: String, default: ''},
});

export const users = mongoose.model('User', userSchema, 'users');
