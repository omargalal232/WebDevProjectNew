

const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const path = require('path');

const homepage1Router = require('./routes/homepage1');
const cruisesRoutes = require('./routes/Cruise');
const cruisesTours = require('./routes/tours');

const app = express();
const port = 8080;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Routes
app.use('/', homepage1Router);
app.use('/Cruise', cruisesRoutes);
app.use('/tours', cruisesTours);


// app.get('/', (req, res) => {
//   res.render("homepage1")
// })

// app.get('/Cruise', (req, res) => {
//   res.render("Cruise")
// })

// app.get('/Cruise1', (req, res) => {
//   res.render("Cruise1")
// })

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

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
})

app.use((req, res) => {
  res.status(404).render('404', { userName: (req.session && req.session.userName ? req.session.userName : "") });
});
