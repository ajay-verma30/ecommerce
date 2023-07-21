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


module.exports = router;