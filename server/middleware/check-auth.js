require('dotenv').config();
const jwt = require('jsonwebtoken');

// ===================== AUTH MIDDLEWARE ===================
/*
* Checks if the user has the right token to make the request
* */
module.exports = (req, res, next) => {
  try {
    //get the token
    const token = req.headers.authorization.split(' ')[1];
    // decoded
    const decodedToken = jwt.verify(token, process.env.SECRETKEY);
    req.userData = {
      strEmail: decodedToken.strEmail,
      _id: decodedToken._id
    };
    next();
  } catch (error) {
    res.status(401).json({ message: 'Auth failed!' });
  }
};
