
const mongoose = require("mongoose");
// const bcryptjs = require('bcryptjs');
// schema definition
const agentSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: 'Please Enter Full name'
    },
    username: {
        type: String,
        unique: true,
        require: 'Please Enter unique Username'
    },
    emailaddress: String,
    nationalId: {
       type: String},
    password: {
        type: String,
        required: 'Please Enter Password'
    }
});


// Creating an instance of the model
module.exports = mongoose.model("Agent", agentSchema)