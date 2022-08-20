const ProductsModel = require("../model/productsModel");

// Create Product
exports.CreateProduct=(req, res )=>{
    const reqbody = req.body;
    ProductsModel.create(reqbody,(error,data)=>{
        if(error){
            res.status(400).json({status:'Product Create Fail',data:error})
        }else{
            res.status(200).json({status:'Product Create Success',data:data})

        }
    })
}
// Read Product
exports.SelectProduct=(req, res )=>{ 
    const Query = {};
    const Projection="ProductName ProductCode Img UnitPrice Qty TotalPrice";
    ProductsModel.find(Query,Projection,(error,data)=>{
        if(error){
            res.status(400).json({status:'Product Create Fail',data:error})
        }else{
            res.status(200).json({status:'Product Create Success',data:data})

        }
    })
}
// Update Product
exports.UpdateProduct=(req, res )=>{  
    const id = req.params.id;
    const query = {_id:id}
    const reqbody = req.body;
    ProductsModel.updateOne(query,reqbody,(error,data)=>{
        if(error){
            res.status(400).json({status:'Product Create Fail',data:error})
        }else{
            res.status(200).json({status:'Product Create Success',data:data})

        }
    })
}
// Delete Product
exports.DeleteProduct=(req, res )=>{  
    const id = req.params.id;
    const query = {_id:id} 
    ProductsModel.remove(query,(error,data)=>{
        if(error){
            res.status(400).json({status:'Product Delete Fail',data:error})
        }else{
            res.status(200).json({status:'Product Delete Success',data:data})

        }
    })
}