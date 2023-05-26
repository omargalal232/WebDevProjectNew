const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const path = require("path");

const mongoose = require('mongoose');


const users = require('./models/users');
   
const user= require('./controllers/users')


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
const { AddUser } = require("./controllers/users");
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

app.post("/signup-action",user.AddUser);




app.post('/loginn', (req, res) => {
  var query = { Email: req.body.email };
  users.find(query)
  
    .then(result => {
      if (result.length > 0) {
        const auth =  bcrypt.compare (password, user.Password);
if (auth) {
  console.log(result[0]);
  req.session.user = result[0];
  res.render("homepage1");
}
throw Error('incorrect password');
       
      }
    
      
      
    })
    .catch(err => {
      console.log(err);
    });
});


  // 404 page
app.use((req, res) => {
  res.status(404).render('404', { users: (req.session.users === undefined ? "" : req.session.users) });
});
  
