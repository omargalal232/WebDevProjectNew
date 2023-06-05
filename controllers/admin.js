const city = require("../models/city");

const Addcity = (req, res) => {
    const City = new city({
        name: req.body.tour_name,
        description: req.body.tour_description,
        image: req.body.tour_image
      });
    
      City
      .save()
      .then((result) => {
        res.render("admin_tours");
      })
      .catch((err) => {
        console.log(err);
        res.render("admin_tours");
      });
  };

  const geteditdata = async (req,res) => {
    try {
        const tour = await city.findById(req.params.id);
        res.render("admin_tours_edit", { tour });
    } catch (err) {
        console.error(err);
        res.status(500).send("Server error");
    }

  }

  const editdata = async (req,res) => {
    try {
        const updatedTour = {
            name: req.body.tour_name,
            description: req.body.tour_description,
            image: req.body.tour_image
        };
        await city.findByIdAndUpdate(req.params.id, updatedTour);
        res.redirect("/admin_tours");
    } catch (err) {
        console.error(err);
        res.status(500).send("Server error");
    }

  }
  const deletedata = async (req,res) => {
    try {
        await city.findByIdAndRemove(req.params.id);
        res.redirect("/admin_tours");
    } catch (err) {
        console.error(err);
        res.status(500).send("Server error");
    }
  }
 
  module.exports = {
    geteditdata: geteditdata,
    Addcity:Addcity,
    editdata:editdata,
    deletedata:deletedata,
  };
  