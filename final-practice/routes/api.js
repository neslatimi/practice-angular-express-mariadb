var express = require('express');
var router = express.Router();
var DB=require('../modules/db');
var db=new DB();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({message:'Server works!'})
});

router.get('/users', async function(req, res, next) {
  let result=await db.read();
  res.json(result)
});

router.delete('/users/:id', async function(req, res, next) {
  let result=await db.delete(req.params.id);
  res.json(result);
});

router.post('/users', async (req,res, next)=>{
  console.log(req.body);
  let result=await db.create(req.body);
  res.send(result);
})

router.post('/users/update/:id',async(req,res)=>{
  let result=await db.update(req.body,req.params.id);
  res.send(result)
})

router.get('/users/getone/:id', async function(req, res, next) {
  let result=await db.getOne(req.params.id);
  res.send(result)
});

module.exports = router;
