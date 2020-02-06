const express = require('express');

// ==================== EDUCATION ROUTES ===================
const router = express.Router();

// TODO: MODELS
// ---------------------------------------------------------
const Education = require('../Models/Education');
// TODO: MIDDLEWARES
// ---------------------------------------------------------
const checkAuth = require('../middleware/check-auth');

// TODO: GET - EDUCATION FOR PUBLIC
// ---------------------------------------------------------
router.get('/', function (req, res, next) {
  Education.find().sort({
    'boolStudyingNow': -1,
    'startDate': -1
  }).then((result) => {
    return res.status(200).json(result);
  }).catch((error) => {
    return res.status(500).json(error);
  });
});

// TODO: GET - EDUCATION FOR ADMIN
// ---------------------------------------------------------
router.get('/admin', checkAuth, function (req, res, next) {
  Education.find().select({
    'strSchoolName': 1,
    'strTitle': 1
  }).sort({
    'boolStudyingNow': -1,
    'startDate': -1
  }).then((result) => {
    return res.status(200).json(result);
  }).catch(error => {
    return res.status(500).json(error)
  });
});

// TODO: POST - REGISTER EDUCATION
// ---------------------------------------------------------
router.post('/', checkAuth, function (req, res, next) {

  if(
    !req.body.strSchoolName ||
    !req.body.strTitle ||
    !('boolStudyingNow' in req.body) ||
    !req.body.startDate
  ) {
    return res.status(400).json({
      message: 'missing a field'
    });
  }

  const newEducation = new Education({
    strSchoolName: req.body.strSchoolName,
    strTitle: req.body.strTitle,
    boolStudyingNow: req.body.boolStudyingNow,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    strUrlEducationSite: req.body.strUrlEducationSite
  });

  newEducation.save().then((result) => {
    return res.status(200).json(result);
  }).catch((error) => {
    return res.status(500).json(error);
  });
});

// TODO: DELETE EDUCATION
// ---------------------------------------------------------
router.delete('/:id', checkAuth, function (req, res, next) {

  if(!req.params.id) {
    return res.status(400).json({
      message: 'missing education to delete'
    });
  }

  Education.findOneAndDelete({
    _id: req.params.id
  }).then((result) => {
    if(result) {
      return res.status(200).json({
        message: 'Education deleted'
      });
    } else {
      return  res.status(404).json({
        message: 'Education could not be found'
      });
    }
  }).catch((error) => {
    return res.status(500).json(error);
  })
});

module.exports = router;
