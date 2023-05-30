const users = require("../models/users");
const path = require("path");
const bcrypt = require("bcryptjs");

const AddUser = (req, res) => {
   const user = new users({
      Name: req.body.Name,
      UserName: req.body.UserName,
      Email: req.body.Email,
      Number: req.body.Number,
      Password: req.body.Password,
      ConfirmPassword: req.body.ConfirmPassword,
   });

   user
      .save()
      .then((result) => {
         res.render("signup");
      })
      .catch((err) => {
         console.log(err);
         res.render("signup");
      });
};

const GetUser = (req, res, next) => {
   const { email, password } = req.body;

   users.findOne({ Email: email })
      .then(user => {
         if (!user) {
            // User with the provided email not found
            res.render("login", { errorMessage: "Email or password is wrong. Please try again." });
         } else {
            bcrypt.compare(password, user.Password, (err, isMatch) => {
               if (err) {
                  // Error occurred during password comparison
                  console.log(err);
                  res.render("login", { errorMessage: "An error occurred. Please try again." });
               }

               if (isMatch) {
                  // Password matched, login successful
                  req.session.users = user; // Store the authenticated user object in req.session.users
                  next();
               } else {
                  // Password does not match
                  res.render("login", { errorMessage: "Email or password is wrong. Please try again." });
               }
            });
         }
      })
      .catch(err => {
         console.log(err);
         res.render("login", { errorMessage: "An error occurred. Please try again." });
      });
};




const checkUN = (req, res) => {
   var query = { UserName: req.body.UserName };
   users.find(query)
      .then(result => {
         if (result.length > 0) {
            res.send('taken');
         }
         else {
            res.send('available');
         }
      })
      .catch(err => {
         console.log(err);
      });
};

module.exports = {
   AddUser: AddUser,
   GetUser: GetUser,
   checkUN: checkUN

};


