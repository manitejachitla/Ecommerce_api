const mongoose = require('mongoose')
const seller_model=new mongoose.Schema(
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
        Items_list:
            {
                type:Object
            },
        orders:
            [
                {
                    type:String
                }
            ]
    }
)
module.exports=mongoose.model("seller",seller_model)