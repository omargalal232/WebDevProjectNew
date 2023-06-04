const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const path = require("path");
const mongoose = require("mongoose");
const city= require("./models/city");

const cairotours = require("./models/cairotours");
const bodyParser = require('body-parser');
const { generateGpt3Response } = require('./openai');



const bcrypt = require("bcryptjs");
mongoose.connect(
  "mongodb+srv://youssef:MIU12345@cluster1.4w0cahu.mongodb.net/DB?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

  .then((result) => {
    app.listen(port, () => {
      console.log(`app listening on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
const port = 8080;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const flightRouter = require("./routes/flight");
const homepage1Router = require("./routes/homepage1");
const cruisesRoutes = require("./routes/Cruise");
const ToursRouter = require("./routes/tours");
const signupRouter = require("./routes/signup");
const loginRouter = require("./routes/login");
const admindashboardRouter = require("./routes/admindashboard");
const cairoRouter=require("./routes/cairotours");
const hotelRouter = require("./routes/hotel");


app.use("/flight", flightRouter);
app.use("/", homepage1Router);
app.use("/Cruise", cruisesRoutes);
app.use("/tours", ToursRouter);
app.use("/signup", signupRouter);
app.use("/login", loginRouter);
app.use("/", admindashboardRouter);
app.use("/cairotours", cairoRouter);
app.use("/hotel", hotelRouter);


// Move the 404 error handler down, after the chatbot routes
app.use((req, res) => {
  res.status(404).render("404", {
    users: req.session.users === undefined ? "" : req.session.users,
  });
});


module.exports = app;
