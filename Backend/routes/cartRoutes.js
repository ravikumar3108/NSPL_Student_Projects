const express = require("express");
const router = express.Router();
const protectRoute = require("../middleware/protectRoute");
const {addToCart,getCartsData} = require("../controller/cartController")


router.post("/addtocart",protectRoute,addToCart)
router.post("/getCart",protectRoute,getCartsData)

module.exports = router;
