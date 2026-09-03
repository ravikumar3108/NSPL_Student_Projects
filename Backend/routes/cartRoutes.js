const express = require("express");
const router = express.Router();
const protectRoute = require("../middleware/protectRoute");
const {addToCart} = require("../controller/cartController")

router.post("/addtocart",protectRoute,addToCart)



module.exports = router;
