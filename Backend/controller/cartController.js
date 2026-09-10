const Cart = require("../model/cartModel");
const Product = require("../model/productModel");

const addToCart = async (req, res) => {
  // console.log(req.body._id);
  // console.log("user", req.user);
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
  // console.log(userId)
  const userCartData = await Cart.find({ user: userId }).populate("item");
  res.json({ data: userCartData });
};


const increaseQuantity = async(req,res)=>{

  try {
    const id = req.body.id
  
    const singleData = await Cart.findByIdAndUpdate({_id:id})
    console.log(singleData.quantity)

    singleData.quantity += 1;

    const upadteQty = await singleData.save()
   
    res.json({message:upadteQty})

  } catch (error) {
    console.log(error.message)
    res.json({error:error})
  }

}



module.exports = { addToCart, getCartsData ,increaseQuantity };
