const express = require("express");
const router = express.Router();
const moviesCtrl = require("../controllers/movies")

router.post("/", moviesCtrl.create);
router.get("/find", moviesCtrl.findAll)
router.get("/find/:rating", moviesCtrl.findByRating)


module.exports = router;
