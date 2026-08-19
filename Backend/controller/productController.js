const product = require("../model/productModel");

// ==========================================
// CREATE PRODUCT
// ==========================================

const createProduct = async (req, res) => {
  console.log("File:", req.file);
  console.log("Body:", req.body);

  try {
    const {
      title,
      brand,
      category,
      description,
      price,
      discount,
      size,
      stock,
      section,
    } = req.body;

    const newProduct = new product({
      title,

      brand: brand || "",

      category,

      description,

      price,

      discount: discount || 0,

      size,

      stock: stock || 0,
      section: section,
      image: req.file ? req.file.filename : "",
    });

    const saveProduct = await newProduct.save();

    if (!saveProduct) {
      return res.status(400).json({
        message: "Product not created",
        status: false,
      });
    }

    return res.status(201).json({
      message: "Product successfully created",

      status: true,

      data: saveProduct,
    });
  } catch (error) {
    console.log("Create Product Error:", error);

    return res.status(500).json({
      message: "Server error",

      status: false,

      error: error.message,
    });
  }
};

// ==========================================
// GET ALL PRODUCTS
// ==========================================

const getAllProducts = async (req, res) => {
  try {
    const products = await product.find();

    return res.status(200).json({
      success: true,

      message: "Products fetched successfully",

      data: products,
    });
  } catch (error) {
    console.log("Get Products Error:", error);

    return res.status(500).json({
      success: false,

      message: error.message,
    });
  }
};

// ==========================================
// GET SINGLE PRODUCT
// ==========================================

const getSingleProduct = async (req, res) => {
  try {
    const singleProduct = await product.findById(req.params.id);

    if (!singleProduct) {
      return res.status(404).json({
        success: false,

        message: "Product not found",
      });
    }

    return res.status(200).json({
      success: true,

      message: "Product fetched successfully",

      data: singleProduct,
    });
  } catch (error) {
    console.log("Get Single Product Error:", error);

    return res.status(500).json({
      success: false,

      message: error.message,
    });
  }
};

const FeaturedProducts = async (req, res) => {
  try {
    const featuredData = await product.find({section:"featured"});

    return res.status(200).json({
        success: true,
        message: "Product fetched successfully",
        data: featuredData
    });
    
  } catch (error) {
    console.log("fearuted Product:", error);

    return res.status(500).json({
      success: false,

      message: error.message,
    });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  FeaturedProducts,
};
