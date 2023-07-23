import React, { useEffect, useState } from 'react'
import Navigation from '../header/navbar'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Sidenavbar from '../body/sidenavbar/sidenavbar'
import Card from 'react-bootstrap/Card'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoxesStacked } from '@fortawesome/free-solid-svg-icons'
import { faFolderTree } from '@fortawesome/free-solid-svg-icons'
import { faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons'


require('./inventory.css');

const Inventory = () => {
  const [totalStock, setTotalStock] = useState(0);
  const [totalCategory, setTotalCategory] = useState(0);
  const [products, setProducts] = useState([]);
  const [categoryCount, setcategoryCount] = useState([]);
  const [onsale, setonSale] = useState(0);

  useEffect(() => {
    fetchDetails();
  }, []);

  const fetchDetails = async () => {
    const response = await axios.get('http://localhost:3000/products/inventory');
    const res = response.data;
    setProducts(res);
    calculateTotalStock(res);
    calculateCategory(res);
    calculateSale(res);
    countCategories(res);
  };

  const calculateTotalStock = (products) => {
    let total = 0;
    products.forEach((product) => {
      total += product.pquantity
      setTotalStock(total);
    });
  }

  const calculateCategory = (products) => {
    const totalCat = new Set();
    products.forEach((product) => {
      totalCat.add(product.pcategory)
    })
    setTotalCategory(totalCat.size)
  }

  const calculateSale = (products) => {
    let totalSale = 0;
  
    products.forEach((product) => {
      if (product.sale === true) {
        totalSale += 1;
      }
    });
  
    setonSale(totalSale)
  };


  const countCategories = (products) => {
    const categoryCount = {};
  
    products.forEach((product) => {
      const category = product.pcategory;
      if (categoryCount[category]) {
        categoryCount[category] += 1;
      } else {
        categoryCount[category] = 1;
      }
    });
  
    setcategoryCount(categoryCount);
  };

  console.log(categoryCount)

  return (
    <div>
      <Navigation />
      <Row>
        <Col md={2} className='sidebar'>
          <Sidenavbar />
        </Col>
        <Col md={10}>
          <Row>
            <Col md={3}>
              <Card>
                <Card.Title className='text-center'>{totalStock} <FontAwesomeIcon className='stockicon icons' icon={faBoxesStacked} /></Card.Title>
                <Card.Text className='text-center'>Products in Stock</Card.Text>
              </Card>
            </Col>
            <Col md={3}>
              <Card>
                <Card.Title className='text-center'>{totalCategory} <FontAwesomeIcon className='categoryicon icons' icon={faFolderTree} /></Card.Title>
                <Card.Text className='text-center'>Total Categories</Card.Text>
              </Card>
            </Col>
            <Col md={3}>
            <Card>
                <Card.Title className='text-center'>{onsale} <FontAwesomeIcon className='saleicon icons' icon={faHandHoldingDollar} /></Card.Title>
                <Card.Text className='text-center'>Total Products on Sale</Card.Text>
              </Card>
            </Col>
            <Col md={3}>
            <Card>
                <Card.Title className='text-center'>randomCard</Card.Title>
                <Card.Text className='text-center'></Card.Text>
              </Card>
            </Col>
          </Row>

          <Row>

            <Col md={8}>
            </Col>

          </Row>

        </Col>
      </Row>
    </div>
  )
}

export default Inventory;
