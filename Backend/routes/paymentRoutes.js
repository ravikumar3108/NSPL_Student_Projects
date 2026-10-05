const express = require("express");
const router = express.Router();
const {verifyPayment ,createOrder,clearCart} = require("../controller/paymentControllers")




router.post("/create-order",createOrder);
router.post("/verify",verifyPayment);
router.post("/clearCart", clearCart);




module.exports = router;
