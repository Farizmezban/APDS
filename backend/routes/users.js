var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({users: [{name: 'Timmy',age:40},{name:'Rashid',age:22}]});
});

module.exports = router;
