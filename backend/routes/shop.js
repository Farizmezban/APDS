var express = require("express");
var router = express.Router();

/* GET shop listing. */
router.get("/", function (req, res, next) {
  res.json({ users: [{ name: "Timmy" }] });
});
router.post('/',(req,res,next)=>{
  if(req.body.username==='1010' && req.body.password==='12345')
  {
    res.json({signed:true})
  }else{
    res.json({signed:false})
  }
})

module.exports = router;
