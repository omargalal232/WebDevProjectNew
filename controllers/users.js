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
    var query = { UserName: req.body.un, Password: req.body.pw };
    Employees.findOne(query)
        .then(result => {
            if (!result) {
                res.render('err', { err: 'Invalid Data', user: (req.session.user === undefined ? "" : req.session.user) })
            }
            else {
                req.session.user = result;
                res.redirect('/user/profile');
            }
        })
        .catch(err => {
            console.log(err);
        });
};

  module.exports = {
    AddUser: AddUser,
    GetUser: GetUser
  };
    
  
