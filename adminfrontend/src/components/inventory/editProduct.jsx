import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './inventory.css'
import Sidenavbar from '../body/sidenavbar/sidenavbar'
import Navigation from '../header/navbar'
import { Button, Modal } from 'react-bootstrap';

import Form from 'react-bootstrap/Form'

const EditProduct = () => {
    const [searchQuery, setSearchQuery] =useState('')
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [products, setProducts] = useState([]);
    const [newprice, setnewPrice] = useState('');
    const [isOn, setIsOn] = useState(false);


    const handleToggle = ({searchQuery}) => {
        setIsOn((prevIsOn) => !prevIsOn);
        console.log(isOn);
    };
    useEffect(() => {
        fetchProducts();
    }, [])

    const fetchProducts = async () => {
        const response = await axios.get('http://localhost:3000/products/inventory');
        const resproducts = response.data;
        setProducts(resproducts);
    }

    const handleOpenModal = (products) => {
        setSelectedProduct(products);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setSelectedProduct(null);
        setShowModal(false);
    };

    const handleSubmit = async () => {
        try {
          let updatedSale = isOn;
      
          const response = await axios.put(`http://localhost:3000/products/inventory/editProduct/${selectedProduct._id}`, {
            sale: updatedSale, salePrice: newprice
          });
          
          if (response.status === 202) {
            handleCloseModal()
          } else {
          }
        } catch (error) {
          console.error(error);
        }
      };



      //searchQuery Function
      const handleSearch = async(e) =>{
        e.preventDefault();
        const fetchedResults  = await axios.get('http://localhost:3000/products/inventory');
        const results = fetchedResults.data;
        const filteredData = results.filter((res)=> res.pname.toLowerCase().includes(searchQuery.toLowerCase()));
        setProducts(filteredData);
      }
    
    return (
        <div>
            <Navigation />
            <Row>
                <Col md={2} className='sidebar'>
                    <Sidenavbar />
                </Col>
                <Col md={10}>
                    <Container>
                        <Form onSubmit={handleSearch} className='searchbox'>
                            <Form.Control type='text' value={searchQuery} placeholder='Looking for specific Product ?' onChange={(e)=>setSearchQuery(e.target.value)}/>
                        </Form>
                        <Table  bordered hover>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Category</th>
                                    <th>SubCategory</th>
                                    <th>Qunatity</th>
                                    <th>Price</th>
                                    <th>Sale</th>
                                    <th>Sale Price</th>
                                    <th>Last Updated At</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product) => (
                                    <tr key={product._id}>
                                        <td>{product.pname}</td>
                                        <td>{product.pdescription}</td>
                                        <td>{product.pcategory}</td>
                                        <td>{product.scategory}</td>
                                        <td>{product.pquantity}</td>
                                        <td>{product.pprice}</td>
                                        <td>{product.sale ? 'Yes' : 'No'}</td>
                                        <td>{product.salePrice}</td>
                                        <td>{product.lastUpdated}</td>
                                        <td className='editicon btn btn-transparent' onClick={() => handleOpenModal(product)}><FontAwesomeIcon icon={faPencil}  /></td>
                                    </tr>

                                ))}
                            </tbody>
                        </Table>
                    </Container>
                </Col>
            </Row>



            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedProduct && selectedProduct.pname}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedProduct && (
                        <>
                            <p>Description: {selectedProduct.pdescription}</p>
                            <p>Price: ${selectedProduct.pprice}</p>
                            <p>Category: {selectedProduct.pcategory}</p>
                            <p>Sub Category: {selectedProduct.scategory}</p>
                            <hr/>
                            <p>Is this product on Sale</p>
                            <Form.Check
                                type="switch"
                                id="custom-switch"
                                label={isOn ? 'On' : 'Off'}
                                checked={isOn}
                                onChange={handleToggle}
                            />
                            <hr/>
                            <p>Set new Price</p>
                            <Form.Control type="number" value={newprice} onChange={(e) => setnewPrice(e.target.value)}></Form.Control>
                        </>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button className='btn btn-primary' type='submit' onClick={handleSubmit}>Submit</Button>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default EditProduct
