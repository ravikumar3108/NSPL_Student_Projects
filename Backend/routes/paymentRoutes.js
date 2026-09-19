const express = require("express");
const router = express.Router();
const {verifyPayment ,createOrder} = require("../controller/paymentControllers")




router.post("/create-order",createOrder)

module.exports = router;
