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

/* CREATE A POST */
// ---------------------------------------------------------
router.post('/create', checkAuth, function (req, res, next) {

});

module.exports = router;
