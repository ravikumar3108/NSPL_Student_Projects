const express = require("express")
const router = express.Router();
const { userSignup, userLogin,getSingleUser,getAllUser ,profile} = require("../controller/userController")
const protectRoute = require("../middleware/protectRoute")

router.post("/signup", userSignup)
router.post("/login", userLogin)
router.get("/getSingleUser/:id", getSingleUser)
router.get("/getAllUsers",getAllUser)
router.get("/profile",protectRoute, profile)


module.exports = router