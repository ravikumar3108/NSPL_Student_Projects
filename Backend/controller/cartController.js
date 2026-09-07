const Cart = require("../model/cartModel");
const Product = require("../model/productModel");

const addToCart = async (req, res) => {
  console.log(req.body._id);
  console.log("user", req.user);
  try {
    const cartdata = new Cart({
      item: req.body._id,
      user: req.user.userId,
    });

    const saveData = await cartdata.save();
    res.json({ message: saveData });
  } catch (error) {
    res.json({ error: error });
  }
};

const getCartsData = async (req, res) => {
  const userId = req.user.userId;
  console.log(userId)
  const userCartData = await Cart.find({ user: userId }).populate("item");
  res.json({ data: userCartData });
};

module.exports = { addToCart, getCartsData };
