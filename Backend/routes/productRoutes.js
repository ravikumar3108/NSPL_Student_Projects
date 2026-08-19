const express = require("express");
const router = express.Router();
const {
  createProduct,
  getAllProducts,
  getSingleProduct,
  FeaturedProducts,
} = require("../controller/productController");
const upload = require("../middleware/upload");
const protectRoute = require("../middleware/protectRoute");

// image upload
router.post(
  "/createProduct",
  upload.single("image"),
  protectRoute,
  createProduct,
);

router.get("/getAllProducts", protectRoute, getAllProducts);
// GET SINLGE PRODUCT

// router.delete("/deleteProduct/:id", deleteProduct)
// router.put("/updateProduct/:id", updateProduct)
router.get("/getSingleProduct/:id", getSingleProduct);
router.get("/featuredProducts", FeaturedProducts);

module.exports = router;
