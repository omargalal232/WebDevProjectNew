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


  


module.exports = {
  AddCruise: AddCruise,

};

