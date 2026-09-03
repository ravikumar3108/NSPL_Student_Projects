const mongoose = require("mongoose")

const cartSchema = new mongoose.Schema({
    item:{
        type:mongoose.Schema.Types.ObjectId,
        ref : "product"
    },
    user:{
         type:mongoose.Schema.Types.ObjectId,
        ref : "user"
    },
    quantity:{
        type:Number,
        default:1
    }
})

const Cart = mongoose.model("Cart",cartSchema)
module.exports = Cart


