const express = require('express');

// ==================== EDUCATION ROUTES ===================
const router = express.Router();

// TODO: MODELS
// ---------------------------------------------------------
const Education = require('../Models/Education');
// TODO: MIDDLEWARES
// ---------------------------------------------------------
const checkAuth = require('../middleware/check-auth');

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
    strSchoolName: req.body.strCompanyName,
    strTitle: req.body.strTitle,
    boolStudyingNow: req.body.boolStudyingNow,
    startDate: req.body.star,
    endDate: req.body.endDate,
    strUrlEducationSite: req.body.strUrlEducationSite
  });

  newEducation.save().then((result) => {
    return res.status(200).json(result);
  }).catch((error) => {
    return res.status(500).json(error);
  });
});

module.exports = router;
