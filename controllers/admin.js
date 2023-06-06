const city= require("../models/city");
const user= require("../models/users");
const Hotel = require("../models/hotels");




const AddUser = (req, res) => {
  const User = new user({
     Name: req.body.Name,
     UserName: req.body.UserName,
     Email: req.body.Email,
     Number: req.body.Number,
     Password: req.body.Password,
     ConfirmPassword: req.body.ConfirmPassword,
  });

  User
     .save()
     .then((result) => {
        res.redirect("/admin_customers");
     })
     .catch((err) => {
        console.log(err);
        res.render("admin_customers");
     });
};

const getuserdb = (req,res) => {
  user.find()
  .then(result => {
      res.render("admin_customers", { userss: result, users: req.session.users || null });
    
  })
  .catch(err => {
      console.log(err)
  })

}
const deleteuser= async (req, res) => {

    await user.findByIdAndRemove(req.params.id)
    .then(result => {
    userss: result;
    res.redirect("/admin_customers")
  }) .catch (err=> {
    console.error(err);
    res.status(500).send("Server error");
  })

};

const getedituserld = (req, res) => {
  
  user.findById(req.params.id)
  .then(result => {
    res.render("admin_users_edit", { userss: result, users: req.session.users || null });
  
}).catch (err=> {
  console.error(err);
  res.status(500).send("Server error");
})
}


const edituser = async (req, res) => {
 
    const updateduser = {
      Name: req.body.Name,
      UserName: req.body.UserName,
      Email: req.body.Email,
      Number: req.body.Number,
      Password: req.body.Password,
      ConfirmPassword: req.body.ConfirmPassword
    }
    await user.findByIdAndUpdate(req.params.id, updateduser)
    .then(result=>{
      userss: result
      res.redirect("/admin_customers");
  
   
  }).catch (err=> {
    console.error(err);
    res.status(500).send("Server error");
  })
}




const gethomepage = (req,res) => {
  city.find()
  .then(result => {
      res.render("admin_homepage", { City: result});
    
  })
  .catch(err => {
      console.log(err)
  })

}
const addhomepage =(req, res) => {
  
const cityy=new city({
    name: req.body.name,
    description: req.body.description,
  
    image:req.body.img,
}) 
 cityy.save()
 .then((result) => {
City: result;
res.redirect("/admin_homepage");

})
.catch((err) => {
  console.log(err);
  res.render("admin_homepage");
});

}



const deletecity= async (req, res) => {

  await city.findByIdAndRemove(req.params.id)
  .then(result => {
  City: result;
  res.redirect("/admin_homepage")
}) .catch (err=> {
  console.error(err);
  res.status(500).send("Server error");
})

};



module.exports = {
  
  AddUser,
  getuserdb,
  deleteuser,
  
  getedituserld,
  edituser,
 gethomepage,
 addhomepage,
 deletecity


};