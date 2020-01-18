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

/* GET: - PROJECTS FOR PUBLIC */
// ---------------------------------------------------------
router.get('/', function (req, res, next) {

  Project.find().select({
    'strName': 1,
    'strDesc': 1,
    'strUrlGithub': 1,
    'strUrlHosting': 1
  }).then((result) => {
    return res.status(200).json(result);
  }).catch((error) => {
    return res.status(500).json(error);
  });
});

/* GET: - PROJECTS FOR ADMIN */
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

/* GET: - DETAILS OF A CERTAIN PROJECT */
// ---------------------------------------------------------
router.get('/:id', function (req, res, next) {

  if(
    !req.params.id
  ) {
    return res.status(400).json({
      message: 'missing project'
    });
  }

  Project.findOne({
    _id: req.params.id
  }).then((result) => {
    if(
      //if we have something then we send it
      result
    ) {
      return res.status(200).json(result);
    } else {
      return res.status(404).json({
        message: 'Project could not be found'
      });
    }
  }).catch((error) => {
    return res.status(500).json(error);
  });

});

/* POST: - CREATE A PROJECT */
// ---------------------------------------------------------
router.post('/', checkAuth, function (req, res, next) {

  if(
    // Check that we have all the fields to create our project
    !req.body.strName ||
    !req.body.strDesc||
    !req.body.strUrlGithub
  ) {
    return res.status(400).json({
      message: 'missing a field'
    });
  }

  const newProject = new Project({
    strName: req.body.strName,
    strIdCreator: req.userData._id,
    strDesc: req.body.strDesc,
    strUrlGithub: req.body.strUrlGithub,
    strUrlHosting: req.body.strUrlHosting
  });

  newProject.save().then((result) => {
    return res.status(200).json(result);
  }).catch((error) => {
    return res.status(500).json(error);
  });

});

/* PUT: - EDIT PROJECT */
// ---------------------------------------------------------
router.put('/:id', checkAuth, function (req, res, next) {

  if(
    // check if we have the params
    !req.params.id
  ) {
    return res.status(400).json({
      message: 'No Project specified'
    });
  }
  let json = {
    strName: req.body.strName,
    strDesc: req.body.strDesc,
    strUrlGithub: req.body.strUrlGithub,
    strCollaborators: req.body.strCollaborators,
    intLvlImportance: req.body.intLvlImportance,
    strUrlHosting: req.body.strUrlHosting,
  };
  Project.findOneAndUpdate(
    {_id: req.params.id},
    json
  ).then((result) => {
    return res.status(200).json({
      message: 'Project updated'
    });
  }).catch((error) => {
    return res.status(500).json(error);
  })

});

/* DELETE: - DELETE A PROJECT */
// ---------------------------------------------------------
router.delete('/:id', checkAuth, function (req, res, next) {

  if(
    // checking if we have the project
    !req.params.id
  ) {
    return res.status(400).json({
      message: 'missing project to delete'
    });
  }

  Project.findOneAndDelete({
    _id: req.params.id,
    strIdCreator: req.userData._id
  }).then((result) => {
    if(
      //if we have something then we deleted it
      result
    ) {
      return res.status(200).json({
        message: 'Project deleted successfully'
      });
    } else {
      return res.status(404).json({
        message: 'Project could not be found'
      });
    }
  }).catch((error) => {
    return res.status(500).json(error);
  });

});

module.exports = router;
