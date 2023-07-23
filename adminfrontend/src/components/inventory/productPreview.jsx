import React from 'react'

const ProductPreview = ({pName, pPrice, pdescription, pcategory, scategory, pQunatity}) => {
  return (
    <div>
            <h2 className='text-center'>Product Name: {pName}</h2>
                <h6>Product Description: {pdescription}</h6>
                <h6>Category: {pcategory}</h6>
                <h6>Sub Category: {scategory}</h6>
                <h6>Product Price: {pPrice}</h6>
                <h6>Number of Stock Available: {pQunatity}</h6>
    </div>
  )
}

export default ProductPreview
