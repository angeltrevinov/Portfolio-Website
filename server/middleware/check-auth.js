const jwt = require('jsonwebtoken');
const config = require('../../config');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, config.SECRETKEY);
    req.userData = {
      strEmail: decodedToken.strEmail,
      _id: decodedToken._id
    };
    next();
  } catch (error) {
    res.status(401).json({ message: 'Auth failed!' });
  }
};
