const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");

// schema definition
const agentSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: "Please Enter Full name"
  },
  username: {
    type: String,
    unique: true,
    require: "Please Enter unique Username"
  },
  emailaddress: String,
  nationalId: {
    type: String
  },
  password: {
    type: String,
    required: "Please Enter Password"
  }
});

//hashing a password before saving it to the database pre-save hook

agentSchema.pre("save", function(next) {
  this.password = bcryptjs.hashSync(this.password, 10);
  next();
});

//exporting mongoose to index.js
// module.exports = mongoose.model("user", agentSchema);

//authenticate input against database
agentSchema.statics.authenticate = async function(username, password) {
  const user = await this.findOne({ username: username });
  if (!user) {
    throw new Error("user not found.");
  }
  const match = await bcryptjs.compare(password, user.password);
  if (match) {
    return user;
  }
}

let Agent = mongoose.model("user", agentSchema);
// Creating an instance of the model
module.exports = mongoose.model("user", agentSchema);;
