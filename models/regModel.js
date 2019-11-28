
const mongoose = require("mongoose");
const bcryptjs = require('bcryptjs');
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


// Hashing a paswword before saving it to the database pre-save hook
agentSchema.pre("myPassword", function(next) {
  this.password = bcryptjs.hashSync(this.password, 10);
  next();
});


// Creating an instance of the model
module.exports = mongoose.model("Agent", agentSchema)