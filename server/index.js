const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const config = require('../config');

// ====================== INDEX ============================
/*
* Holds the backend side together
* */

//App settings
// ---------------------------------------------------------
const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

//Set headers for the requests
//----------------------------------------------------------
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Credentials", true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,Authorization,content-type,application/json');
  next();
});

//Mongo Connection
// ---------------------------------------------------------
mongoose.connect(
  config.DATABASE_URL,
  { useUnifiedTopology: true, useNewUrlParser: true }
  ).then(() => {
    console.log('connected to the database');
  }).catch((error) => {
    console.log(error);
  });

// Import Routes
// ---------------------------------------------------------
const userRoutes = require('./Routes/UserRoutes');
const projectRoutes = require('./Routes/ProjectRoutes');

// Routes for requests
app.use('/api/admin', userRoutes);
app.use('/api/project', projectRoutes);

// Start the server
// ---------------------------------------------------------
app.listen(process.env.PORT || '8080', () => {
  console.log("App running");
});

module.exports = app;
