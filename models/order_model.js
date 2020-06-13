const mongoose=require('mongoose')
const order_model=new mongoose.Schema(
    {
        time:
            {
                date:String,
                time:String
            },
        product_id:
            {
                type:String
            },
        user_id:String,
        status:
            {
                type:String
            }
    }
)
module.exports= mongoose.model("order",order_model)