const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersSchema = new Schema({
    username: {
        type: String,
        require: true,
        unique:true
    },
    password: {
        type: String,
        require: true
    },
    
    created_on: Date,
    
});

const Users = mongoose.model('Users', usersSchema);

module.exports = {
    Users
}