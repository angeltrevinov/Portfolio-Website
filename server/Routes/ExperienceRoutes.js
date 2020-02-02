const express = require('express');

// ==================== EXPERIENCE ROUTES ==================
const router = express.Router();

// TODO: MODELS
// ---------------------------------------------------------
const Experience = require('../Models/Experience');
// TODO: MIDDLEWARES
// ---------------------------------------------------------
const checkAuth = require('../middleware/check-auth');

// TODO: GET - EXPERIENCE FOR PUBLIC
// ---------------------------------------------------------
router.get('/', function (req, res, next) {
  Experience.find().sort({
    'startDate': -1
  }).then((result) => {
    return res.status(200).json(result);
  }).catch((error) => {
    return res.status(500).json(error);
  });
});

// TODO: GET - EXPERIENCE FOR ADMIN
// ---------------------------------------------------------
router.get('/admin', checkAuth, function (req, res, next) {
  Experience.find().select({
    'strCompanyName': 1,
    'strPosition': 1,
  }).sort({
    'startDate': -1
  }).then((result) => {
    return res.status(200).json(result);
  }).catch((error) => {
    return res.status(400).json(error);
  });
});
// TODO: GET - DETAILS OF A CERTAIN WORK EXPERIENCE
// ---------------------------------------------------------
router.get('/:id', function (req, res, next) {


  if(
    !req.params.id
  ) {
    return res.status(400).json({
      message: 'missing work experience'
    });
  }

  Experience.findOne({
    _id: req.params.id
  }).then((result) => {
    if(
      result
    ) {
      return res.status(200).json(result);
    } else {
      return res.status(404).json({
        message: 'no work experience found'
      });
    }
  }).catch((error) => {
    return res.status(500).json(error);
  });
});

// TODO: POST - REGISTER A WORK EXPERIENCE
// ---------------------------------------------------------
router.post('/', checkAuth, function (req, res, next) {

  if(
    // Check that we have all the fields to register our
    //      experience
    !req.body.strCompanyName ||
    !req.body.strPosition ||
    !req.body.strDesc ||
    !('boolWorkingNow' in req.body) ||
    !req.body.startDate
  ) {
    return res.status(400).json({
      message: 'missing a field'
    });
  }

  const newExperience = new Experience({
    strCompanyName: req.body.strCompanyName,
    strPosition: req.body.strPosition,
    strDesc: req.body.strDesc,
    boolWorkingNow: req.body.boolWorkingNow,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    strUrlCompanySite: req.body.strUrlCompanySite
  });

  newExperience.save().then((result) => {
    return res.status(200).json(result);
  }).catch((error) => {
    return res.status(500).json(error);
  });
});

// TODO: PUT - EDIT WORK EXPERIENCE
// ---------------------------------------------------------
router.put('/:id', checkAuth, function (req, res, next) {

  if(
    !req.params.id
  ) {
    return res.status(400).json({
      message: 'No work experience was provided'
    });
  }

  let json = {
    strCompanyName: req.body.strCompanyName,
    strPosition: req.body.strPosition,
    strDesc: req.body.strDesc,
    boolWorkingNow: req.body.boolWorkingNow,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    strUrlCompanySite: req.body.strUrlCompanySite
  };
  Experience.findOneAndUpdate(
    {_id: req.params.id},
    json
  ).then((result) => {
    return res.status(200).json({
      message: 'Work Experience was updated'
    }).catch((error) => {
      return res.status(500).json(error);
    });
  })
});

// TODO: DELETE WORK EXPERIENCE
// ---------------------------------------------------------
router.delete('/:id', checkAuth, function (req, res, next) {

  if(
    !req.params.id
  ) {
    return res.status(400).json({
      message: 'missing work experience to delete'
    });
  }

  Experience.findOneAndDelete({
    _id: req.params.id
  }).then((result) => {
    if(
      //if we deleted something
      result
    ) {
      return res.status(200).json({
        message: 'Work Experience deleted successfully'
      });
    } else {
      return res.status(404).json({
        message: 'Work Experience could not be found'
      });
    }
  }).catch((error) => {
    return res.status(500).json(error);
  });

});

module.exports = router;
