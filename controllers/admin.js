const City = require("../models/city");

const Addcitydb = (req, res) => {
  const newCity = new City({
    name: req.body.tour_name,
    description: req.body.tour_description,
    image: req.body.tour_image,
  });

  newCity
    .save()
    .then((result) => {
      res.redirect("/admin_tours");
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/admin_tours");
    });
};

const geteditdata = async (req, res) => {
  try {
    const tour = await City.findById(req.params.id);
    res.render("admin_tours_edit", { tour });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

const editdata = async (req, res) => {
  try {
    const updatedTour = {
      name: req.body.tour_name,
      description: req.body.tour_description,
      image: req.body.tour_image,
    };
    await City.findByIdAndUpdate(req.params.id, updatedTour);
    res.redirect("/admin_tours");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

const deletedata = async (req, res) => {
  try {
    await City.findByIdAndRemove(req.params.id);
    res.redirect("/admin_tours");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

module.exports = {
  geteditdata,
  Addcitydb,
  editdata,
  deletedata,
};