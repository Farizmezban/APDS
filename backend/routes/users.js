var express = require('express');
const req = require('express/lib/request');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({users: [{name: 'Timmy',age:40},{name:'Rashid',age:22}]});
});
router.post('/',(req,res,next)=>{
  if(req.body.username ==='Rashid' && req.body.password ==='Sidu12345'){
    res.json({signed:true})
  }else{
    res.json({signed:false})
  }
})


module.exports = router;
