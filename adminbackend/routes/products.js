const express = require('express');
const router = express.Router();
const Products = require('../models/products');


router.post('/newproduct', async(req,res)=>{
    try{
        const {pname, pcategory, pprice, pdescription, pquantity,scategory} = req.body;
        const padded = Date.now();
        const newProduct = new Products({
            pname,
            pcategory,
            scategory,
            pprice,
            pdescription,
            pquantity,
            addedAt: padded
        });
        await newProduct.save();
        res.status(201).json({
            message: "success"
        });
    }
    catch(e){
        console.error(e)
    }
})


router.get('/inventory', async(req,res)=>{
    try{
        const inventory = await Products.find();
        res.json(inventory);
    }
    catch(e){
        console.error(e)
    }
})


router.put('/inventory/editProduct/:productId', async(req,res)=>{
    try{
        const productId = req.params.productId;
        const { sale, salePrice } = req.body; 
        const lastUpdated = Date.now();
        const update = { sale, lastUpdated, salePrice };
        const updateProduct = await Products.findByIdAndUpdate(productId, update ,{new: true});
        if(!updateProduct){
            res.status(400).send("Product not found");
        }
        res.status(202).json(updateProduct);
    }
    catch(e){
        console.error(e)
    }
})



module.exports = router;