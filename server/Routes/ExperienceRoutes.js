const express = require('express');

// ==================== EXPERIENCE ROUTES ==================
/*
* Manage the routes for work experience
* */
const router = express.Router();

// TODO: MODELS
// ---------------------------------------------------------
const Experience = require('../Models/Experience');
// TODO: MIDDLEWARES
// ---------------------------------------------------------
const checkAuth = require('../middleware/check-auth');

// TODO: POST - REGISTER A WORK EXPERIENCE
// ---------------------------------------------------------
router.post('/', checkAuth, function (req, res, next) {


  if(
    // Check that we have all the fields to register our
    //      experience
    !req.body.strCompanyName ||
    !req.strPosition ||
    !req.body.strDesc ||
    !req.body.boolWorkingNow ||
    !req.body.startDate
  ) {
    return res.status(400).json({
      message: 'missing a field'
    });
  }

  const newExperience = new Experience({
    strCompanyName: req.body.strCompanyName,
    strIdCreator: req.userData._id,
    strPosition: req.body.strPosition,
    strDesc: req.body.strDesc,
    boolWorkingNow: req.body.boolWorkingNow,
    startDate: req.body.startDate,
    endDate: req.body.endDate
  });

  newExperience.save().then((result) => {
    return res.status(200).json(result);
  }).catch((error) => {
    return res.status(500).json(error);
  });
});

module.exports = router;
