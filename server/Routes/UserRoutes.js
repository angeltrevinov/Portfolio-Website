const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../../config');

// ==================== USER ROUTES ========================
/*
* Manage the routes for the users that can manage the app
* their personal details
* */
const router = express.Router();

/* MODELS */
// ---------------------------------------------------------
const User = require('../Models/User');
/* MIDDLEWARES */
const checkAuth = require('../middleware/check-auth');

/*
* POST: LOG IN - to give access to admin users for the app
* */
// ---------------------------------------------------------
router.post('/login', (req, res, next) => {

  if(
    //check if we have all the fields
    !req.body.strEmail ||
    !req.body.strPassword
  ) {
    return res.status(400).json({
      message: 'a field is missing'
    });
  }

  User.findOne({
    //find the user by email
    strEmail: req.body.strEmail
  }).then((fetchUser) => {

    if(
      // check if the user exists
      !fetchUser
    ) {
      return res.status(404).json({
        message: 'User not found'
      });
    }

    bcrypt.compare(
      //Check if the passwords match
      req.body.strPassword,
      fetchUser.strPassword
    ).then((result) => {

      if(
        //incorrect password
        !result
      ) {
        return res.status(400).json({
          message: 'password is incorrect'
        });
      }

      // Create the JWT
      const token = jwt.sign({
        strEmail: fetchUser.strEmail,
        _id: fetchUser._id
      }, config.SECRETKEY, {expiresIn: '1day'});

      return res.status(200).json({
        token: token
      });
    });

  }).catch((error) => {
    //unknown error
    return res.status(500).json(error);
  });
});

/**
 * PUT: ABOUT - route to edit or post new personal
 * description about the main user
 */
// ---------------------------------------------------------
router.put('/about', checkAuth, function (req, res, next) {

  if(
    //check if one of the descriptions is received
    !req.body.strEngAbout &&
    !req.body.strSpaAbout
  ) {
    return res.status(400).json({
      message: 'no description provided'
    });
  }

  let json = {};

  if(
    // check if we have a change for strEngAbout
    req.body.strEngAbout
  ) {
    json.strEngAbout = req.body.strEngAbout;
  }

  if(
    // check if we have a change for strSpaAbout
    req.body.strSpaAbout
  ) {
    json.strSpaAbout = req.body.strSpaAbout;
  }

  User.updateOne(
    // find the user and updated
    {_id: req.userData._id},
    json
  ).then((result) => {
      return res.status(200).json({
        message: "the description was updated successfully"
      });
  }).catch((error) => {
    return res.status(500).json(error);
  });
});

/*
* GET: ABOUT - route to get the information about the main
* user, this is a description of what the user does
* */
// ---------------------------------------------------------
router.get('/about', function (req, res, next) {

  User.findOne().select({ 'strEngAbout': 1, '_id': 0})
    .then((result) => {
    return res.status(200).json(result);
  }).catch((error) => {
    return res.status(500).json(error);
  });

});

module.exports = router;


