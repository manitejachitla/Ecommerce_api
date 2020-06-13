const mongoose = require('mongoose')
const user_model=new mongoose.Schema(
    {
        name:
            {
                type:String,
                required:true
            },
        username: {
            type:String,
            unique:true,
            required:true
        },
        pwd: {
            type:String,
            required:true
        },
        wishlist:[{type:String}],
        cart:[{type:String}],
        ordered_items:[{product_id:String,order_id:String}]
    }
)
module.exports=mongoose.model("Buyer",user_model)