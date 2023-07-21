import React from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'

const ProductPreview = ({pName, pPrice, pdescription, pcategory, scategory, pQunatity}) => {
  return (
    <div>
      <Container>
        <Card>
            <Card.Title className='text-center'>Product Name: {pName}</Card.Title>
            <Card.Body>
                <Card.Text>Product Description: {pdescription}</Card.Text>
                <Card.Text>Category: {pcategory}</Card.Text>
                <Card.Text>Sub Category: {scategory}</Card.Text>
                <Card.Text>Product Price: {pPrice}</Card.Text>
                <Card.Text>Number of Stock Available: {pQunatity}</Card.Text>
            </Card.Body>
        </Card>
      </Container>
    </div>
  )
}

export default ProductPreview
