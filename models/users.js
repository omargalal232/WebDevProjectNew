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
+userSchema.pre("save", function (next) {
  const user = this

  if (this.isModified("Password") || this.isNew) {
    bcrypt.genSalt(10, function (saltError, salt) {
      if (saltError) {
        return next(saltError)
      } else {
        bcrypt.hash(user.Password, salt, function(hashError, hash) {
          if (hashError) {
            return next(hashError)
          }

          user.Password = hash
          user.ConfirmPassword=hash
          next()
        })
      }
    })
  } else {
    return next()
  }
})
 
 
// export the model
module.exports = users; 