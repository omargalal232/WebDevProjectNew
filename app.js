const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const path = require("path");

const mongoose = require('mongoose');


const users = require('./models/users');
   
  


const bcrypt = require("bcryptjs")


const { request } = require("http");

const app = express();
app.use(express.urlencoded({ extended: true }));
const port = 8080;
mongoose.connect("mongodb+srv://yousefhany:hany2002@cluster1.zspsqcg.mongodb.net/test?retryWrites=true&w=majority")
  .then( result => {
    app.listen(port, () => {
      console.log(`Example app listening on http://localhost:${port}`);
    })
  })
  .catch( err => {
    console.log(err);
  });
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
app.use(cookieParser());


const homepage1Router = require("./routes/homepage1");
const cruisesRoutes = require("./routes/Cruise");
const cruisesTours = require("./routes/tours");
const signupRouter = require("./routes/signup");
// Routes
app.use("/", homepage1Router);
app.use("/Cruise", cruisesRoutes);
app.use("/tours", cruisesTours);
app.use("/signup", signupRouter);

// app.get('/', (req, res) => {
//   res.render("homepage1")
// })

// app.get('/Cruise', (req, res) => {
//   res.render("Cruise")
// })

// app.get('/Cruise1', (req, res) => {
//   res.render("Cruise1")
// });


// app.get('/flight', (req, res) => {
//   res.render("flight")
// })

// app.get('/tours', (req, res) => {
//   res.render("tours")
// })

// app.get('/login', (req, res) => {
//   res.render("login")
// })

// app.get('/signup', (req, res) => {
//   res.render("signup")
// })

// app.get('/admindashboard', (req, res) => {
//   res.render("admindashboard")
// })



app.post("/signup-action", (req, res) => {
  const user = new users({
  
    Name: req.body.Name,
    UserName: req.body.UserName,
    Email: req.body.Email,
    Number: req.body.Number,
    Password: req.body.Password,
    ConfirmPassword: req.body.ConfirmPassword,
  

  });
 


user
    .save(
    
     )
    .then( result => {
      res.redirect('/');
    })
    .catch( err => {
      console.log(err);
    });
}); 



  // 404 page
app.use((req, res) => {
  res.status(404).render('404', { users: (req.session.users === undefined ? "" : req.session.users) });
});
  
