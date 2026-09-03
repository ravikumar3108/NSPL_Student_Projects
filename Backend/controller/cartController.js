const Cart = require("../model/cartModel")
const Product = require("../model/productModel")

const addToCart = async(req,res)=>{
    console.log(req.body)
    console.log(req.user._id)
    try {
        

        const cartdata = new Cart({
            item:req.body._id,
            user:req.user._id
        })

        const saveData = await cartdata.save()
        res.json({message:saveData})

    } catch (error) {
         res.json({error:error})
    }   

}

module.exports = {addToCart}