const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
// define the Schema (the structure of the article)
const userSchema = new Schema({
  Name: {
    type: String,
    required: true,
  },
 
  UserName: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Number: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true
  },
  ConfirmPassword: {
    type: String,
    required: true
  },
  
}, { timestamps: true });

 
 
// Create a model based on that schema
const users = mongoose.model("users", userSchema);
 
 
// export the model
module.exports = users; 