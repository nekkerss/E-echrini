const productModel = require("../../models/productModel")

const deleteProduct = async(req,res)=>{
    try{
        const { productId } = req.body
        console.log(req.body)

        const product = await productModel.findByIdAndDelete(productId)
        console.log(product)

        res.json({
            data : product,
            message : "Ok delted ",
            success : true,
            error : false
        })

        
    }catch(err){
        res.json({
            message : err?.message  || err,
            error : true,
            success : false
        })
    }
}

module.exports = deleteProduct