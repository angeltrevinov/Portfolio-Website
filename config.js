// ====================== CONFIG ===========================
/*
* Config file to store important keys
* */

/* DATABASE CONNECTION */
// ---------------------------------------------------------
exports.DATABASE_URL =
  process.env.DATABASE_URL ||
  'mongodb://localhost/Angel-Portfolio';

/* JWT ENCODER*/
// ---------------------------------------------------------
exports.SECRETKEY =
  process.env.SECRETKEY ||
  'secret_here';
