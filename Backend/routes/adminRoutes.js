const express = require("express");

const router = express.Router();
const {
  adminLogin,
  registerAdmin,
  singleAdmin,
  getAllAdmin,
  profile,
} = require("../controller/adminController");
const upload = require("../middleware/upload");
const protectRoute = require("../middleware/protectRoute");

router.post("/login", adminLogin);
router.post("/register", upload.single("image"), registerAdmin);
router.get("/singleadmin/:id", singleAdmin);
router.get("/getAllAdmin", protectRoute, getAllAdmin);
router.get("/profile", protectRoute, profile);

module.exports = router;
