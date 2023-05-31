const city = require("../models/cities");

const bcrypt= require ("bcryptjs");

const Addcity = (req, res) => {
    const city = new cities({
        name: req.body.name,
        description: req.body.description,
        
      });
    
      city
      .save()
      .then((result) => {
        res.render("tours");
      })
      .catch((err) => {
        console.log(err);
        res.render("tours");
      });
  };
  const getcities = async (req, res, next) => {
    //res.send("All Products Test Message");
    const cities = city.find({}).then((cities) => {
      res.json(cities);
    }).catch((err) => {
      next(err);
    });
  
  };

  const createdoc=async ()=> {
    try{
    const city=new cities[{
    name:"alex",
    description:"hi"
    
    
    },

   { name:"suez",
    description:"hi"}
]
    const result= await city.save();
    }catch(err){
      console.log(err);
    }
    
    }
  


  module.exports = {
    Addcity:Addcity,
getcities:getcities,
createdoc:createdoc
  };
    
  
