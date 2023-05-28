const users = require("../models/users");
const path = require("path");

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

  const GetUser = (req, res) => {
    var email = req.body.email;
    var password = req.body.password;
 
    users.findOne({ Email: email })
       .then(users => {
          if (!users || users.Password !== password) {
             res.render("login", { errorMessage: "Username or password is wrong. Please try again." });
          } else {
             req.session.users = users;
             res.render("/login/homepage1");
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
    
  
