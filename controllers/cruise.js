const Cruise = require("../models/cruise");

const AddCruise = (req, res) => {
  const cruise = new Cruise({
    name: req.body.name,
    destination: req.body.destination,
    duration: req.body.duration,
    price: req.body.price,
    description: req.body.description
    
  });

  cruise
    .save()
    .then((result) => {
      res.render("Cruise"); 
    })
    .catch((err) => {
      console.log(err);
      res.render("Cruise"); 
    });
};

const createdoc=async()=>{
  try{
  const city=new cities({
  name:"alex",
  description:"alex is"
  
  
  })
  const result= await city.save();
  }catch(err){
    console.log(err);
  }
  
  }
  


module.exports = {
  AddCruise: AddCruise,
  createdoc:createdoc
};

