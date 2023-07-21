import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navigation from '../header/navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTableColumns } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faWarehouse } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Container from "react-bootstrap/Container";
import ProductPreview from './productPreview';
require('./inventory.css')

const AddInventory = () => {
  const category = ['Mens', 'Womens', 'Kids'];
  const subCategory = ['Tops', 'Bottoms', 'innerwear', 'footwear'];

  const [pcategory, setpCategory] = useState();
  const [scategory, setsCategory] = useState();
  const [pName, setPname] = useState('');
  const [pPrice, setPprice] = useState('');
  const [pdescription, setpDescription] = useState('');
  const [pQunatity, setQuantity] = useState('');



  return (
    <div>
      <Navigation/>
    <Row>
      <Col md={2} className='sidebar'>
      <Container>
                    <ul>
                        <li className='menu-start'><FontAwesomeIcon icon={faTableColumns} /> Dashboard</li>
                        <li className='menu'><FontAwesomeIcon icon={faWarehouse} /><Link to='/addinventory'> Inventory</Link> </li>
                        <li className='menu'><FontAwesomeIcon icon={faUsers} /> Users </li>
                        <li className='menu'><FontAwesomeIcon icon={faComment} /> Reviews </li>
                    </ul>
                    </Container>
      </Col>
      <Col md={4} className='addinventory'>
      <h4 className='text-center'>Add Inventory</h4>
      <Form>
        <Form.Group>
          <Form.Label htmlFor='pname'>Product Name</Form.Label>
          <Form.Control type='text' id='pname' value={pName} onChange={(e)=> setPname(e.target.value)} placeholder='Product Name' />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='pdescription'>Product Description</Form.Label>
          <Form.Control type='text' as="textarea" value={pdescription} onChange={(e)=> setpDescription(e.target.value)} rows={3} id='pdescription' placeholder='Product Description' />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='pcategory'>Parent Category</Form.Label>
          <Form.Control as='select' value={pcategory} onChange={(e) => setpCategory(e.target.value)}>
            {category.map((pcategory, index) => (
              <option key={index} value={pcategory}>
                {pcategory}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='scategory'>Sub Category</Form.Label>
          <Form.Control as='select' value={scategory} onChange={(e) => setsCategory(e.target.value)}>
            {subCategory.map((scategory, index) => (
              <option key={index} value={scategory}>
                {scategory}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='pprice'>Product Price</Form.Label>
          <Form.Control type="number" value={pPrice} onChange={(e)=> setPprice(e.target.value)} placeholder='Product Price'/>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='pquantity'>Product Quantityy</Form.Label>
          <Form.Control type="number" value={pQunatity} onChange={(e)=> setQuantity(e.target.value)} placeholder='Product Quantity Available'/>
        </Form.Group>
        <Button type="submit" className="btn btn-primary">Add Inventory</Button>
      </Form>
      </Col>
      <Col md={6}>
        <h4 className='text-center'>Preview</h4>
        <ProductPreview pName={pName} pPrice={pPrice} pdescription={pdescription} pcategory={pcategory} scategory={scategory} pQunatity={pQunatity}/>
      </Col>
    </Row>


    </div>
  );
};

export default AddInventory;
