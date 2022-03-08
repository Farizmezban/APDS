var express = require("express");
var router = express.Router();

/* GET shop listing. */
router.get("/", function (req, res, next) {
  res.json({ users: [{ name: "Timmy" }] });
});

module.exports = router;
