const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    uname:{
        required: true,
        type: String
    },
    email:{
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    phone:{
        required: true,
        type: Number
    },
    token:{
        type: String,
        default: null
    },
    superAdmin: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        required: true
    }

})

const Users = new mongoose.model('User', userSchema);

module.exports = Users