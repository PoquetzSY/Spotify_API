const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const config = require('../config');
const indexRoutes = require('./routes/index');
const authRoutes = require('./routes/auth');

const app = express();
require('dotenv').config();

const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

const store = new MongoDBStore({
  uri: process.env.MONGO_URI,
  collection: 'sessions'
});

app.use(session({
  secret: 'your secret key',
  resave: false,
  saveUninitialized: false,
  store: store
}));


// Middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Database connection
mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  // .then(() => app.listen(config.port))
  .catch(err => console.log(err));

  app.listen(process.env.PORT, () => {
    console.log('El servidor esta funcionando correctamente');
  });

// Routes
app.get('/', (req, res) => {
  res.render('index');
  // res.status(200).send('Servidor iniciado correctamente');
});

app.use('/', indexRoutes);
app.use('/auth', authRoutes);

// Error middleware
app.use((err, req, res, next) => {
  console.log(err);
  // res.status(500).send('Something went wrong');
});

