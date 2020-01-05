const express = require('express');

// ================== PROJECT ROUTES =======================
/*
* Manage the routes for the projects
* */
const router = express.Router();

/* MODELS */
// ---------------------------------------------------------
const Project = require('../Models/Project');
/* MIDDLEWARES */
// ---------------------------------------------------------
const checkAuth = require('../middleware/check-auth');

/* GET ALL PROJECTS FOR PUBLIC CARDS */
// ---------------------------------------------------------
router.get('/', function (req, res, next) {

  Project.find().select({
    'strName': 1,
    'strEngDescription': 1,
    'strUrlGithub': 1
  }).then((result) => {
    return res.status(200).json(result);
  }).catch((error) => {
    return res.status(500).json(error);
  });

});

/* CREATE A PROJECT */
// ---------------------------------------------------------
router.post('/', checkAuth, function (req, res, next) {

  if(
    // Check that we have all the fields to create our project
    !req.body.strName ||
    !req.body.strEngDescription ||
    !req.body.strUrlGithub
  ) {
    return res.status(400).json({
      message: 'missing a field'
    });
  }

  const newProject = new Project({
    strName: req.body.strName,
    strIdCreator: req.userData._id,
    strEngDescription: req.body.strEngDescription,
    strUrlGithub: req.body.strUrlGithub
  });

  newProject.save().then((result) => {
    return res.status(200).json(result);
  }).catch((error) => {
    return res.status(500).json(error);
  });

});

/* GET ALL PROJECTS FOR ADMIN */
// ---------------------------------------------------------
router.get('/admin', checkAuth, function (req, res, next) {

  Project.find().select({
    'strName': 1
  }).then((result) => {
    return res.status(200).json(result);
  }).catch((error) => {
    return res.status(500).json(error);
  });

});

/* DELETE A PROJECT */
// ---------------------------------------------------------
router.delete('/', checkAuth, function (req, res, next) {

});

module.exports = router;
