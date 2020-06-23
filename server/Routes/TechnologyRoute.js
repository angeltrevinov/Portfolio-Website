const express = require('express');

// ================== TECHNOLOGIES ROUTES ==================
const router = express.Router();

// TODO: MODELS
// ---------------------------------------------------------
const Technology = require('../Models/Technology');
// TODO: MIDDLEWARES
// ---------------------------------------------------------
const checkAuth = require('../middleware/check-auth');

// TODO: GET - GET TECHNOLOGIES FOR PUBLIC
// ---------------------------------------------------------
router.get('/', function (req, res, next) {
  Technology.find().sort({
    'intLevel': -1
  }).then((result) => {
    return res.status(200).json(result);
  }).catch((error) => {
    return res.status(500).json(error);
  });
});

// TODO: GET - GET TECHNOLOGIES FOR ADMIN
// ---------------------------------------------------------
router.get('/admin', checkAuth, function (req, res, next) {
  Technology.find().select({
    'strName': 1,
    'strTime': 1
  }).sort({
    'intLevel': -1
  }).then((result) => {
    return res.status(200).json(result);
  }).catch((error) => {
    return res.status(500).json(error);
  });
});

// TODO: POST - REGISTER NEW TECHNOLOGY
// ---------------------------------------------------------
router.post('/', checkAuth, function (req, res, next) {
  if(
    !req.body.strName ||
    !req.body.intLevel ||
    !req.body.strTime
  ) {
    return res.status(400).json({
      message: 'missing a field'
    });
  }

  if(
    req.body.intLevel < 0 ||
    req.body.intLevel > 4
  ) {
    return res.status(402).json({
      message: 'level is out of range'
    });
  }

  const newTechnology = new Technology({
    strName: req.body.strName,
    intLevel: req.body.intLevel,
    strTime: req.body.strTime
  });

  newTechnology.save().then((result) => {
    return res.status(200).json(result);
  }).catch((error) => {
    return res.status(500).json(error);
  });
});

module.exports = router;
