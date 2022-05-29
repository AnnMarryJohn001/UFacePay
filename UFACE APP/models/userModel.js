const mongoose = require("mongoose");

const userSchema={
    fname:String,
    lname:String,
    aacno:String,
    phoneno:String,
    balance:String,
    pswd:String

}
const User=mongoose.model("User",userSchema);
module.exports = User;




