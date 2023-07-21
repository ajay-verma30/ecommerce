const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    pname:{
        required: true,
        type: String
    },
    pcategory:{
        required: true,
        type: String
    },
    pdescription: {
        required: true,
        type: String
    },
    pprice:{
        required: true,
        type: Number
    },
    pquantity:{
        required: true,
        type: Number
    },
    sale:{
        type: Boolean,
        default: false
    },
    addedAt: {
        type: Date,
        required: true
    },
    lastUpdated:{
        type: Date
    }
})

const Products = new mongoose.model('Product', productSchema);

module.exports = Products