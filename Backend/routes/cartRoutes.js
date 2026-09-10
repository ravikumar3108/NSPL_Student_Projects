const express = require("express");
const router = express.Router();
const protectRoute = require("../middleware/protectRoute");
const {addToCart,getCartsData,increaseQuantity} = require("../controller/cartController")


router.post("/addtocart",protectRoute,addToCart)
router.post("/getCart",protectRoute,getCartsData)
router.post("/incQty",increaseQuantity)

module.exports = router;
