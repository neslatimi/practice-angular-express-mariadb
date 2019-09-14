var express = require('express');
var router = express.Router();
var DB=require('../modules/db');
var db=new DB();

/* GET users listing. */
router.get('/', async function(req, res, next) {
  let users=await db.read();
  res.render('users', {users:users})
});

module.exports = router;
