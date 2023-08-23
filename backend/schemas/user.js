const { Schema, model } = require("mongoose");
const { utils } = require("../utils");

const user_schema = new Schema({
    username:{type:String, required:true},
    password:{type:String, required:true, set:utils.hash},
    email:{type:String, required:true, unique:true},    
})

const User = model("users", user_schema);
module.exports = { User };
