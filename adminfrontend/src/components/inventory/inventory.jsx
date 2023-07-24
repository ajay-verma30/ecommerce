import React, { useEffect, useState } from 'react';
import Navigation from '../header/navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidenavbar from '../body/sidenavbar/sidenavbar';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxesStacked, faFolderTree, faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons';
import Barchart from '../charts/barchart';
import Table from 'react-bootstrap/Table';

require('./inventory.css');

const Inventory = () => {
  const [totalStock, setTotalStock] = useState(0);
  const [totalCategory, setTotalCategory] = useState(0);
  const [products, setProducts] = useState([]);
  const [categoryCount, setCategoryCount] = useState({});
  const [onsale, setOnSale] = useState(0);
  const [sortResult, setSortResult] = useState([]);

  useEffect(() => {
    fetchDetails();
  }, []);

  const fetchDetails = async () => {
    const response = await axios.get('http://localhost:3000/products/inventory');
    const res = response.data;
    setProducts(res);
    calculateDetails(res);
    sortedResults(res);

  };

  const calculateDetails = (products) => {
    let totalStock = 0;
    let totalSale = 0;
    const totalCat = new Set();
    const categoryCount = {};

    products.forEach((product) => {
      totalStock += product.pquantity;
      totalCat.add(product.pcategory);
      if (product.sale === true) {
        totalSale += 1;
      }

      const category = product.pcategory;
      if (categoryCount[category]) {
        categoryCount[category] += 1;
      } else {
        categoryCount[category] = 1;
      }
    });

    setTotalStock(totalStock);
    setTotalCategory(totalCat.size);
    setOnSale(totalSale);
    setCategoryCount(categoryCount);
  };


  const sortedResults = (products) => {
    const sortedArray = products.sort((a, b) => {
      const maxDateA = Array.isArray(a.addedAt) ? Math.max(...a.addedAt.map(date => new Date(date))) : new Date(0);
      const maxDateB = Array.isArray(b.addedAt) ? Math.max(...b.addedAt.map(date => new Date(date))) : new Date(0);
      return maxDateB - maxDateA; // Sort in descending order
    });
    
    setSortResult(sortedArray.reverse().slice(0,10)) 
  }

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
                <Card.Title className='text-center'>
                  {totalStock} <FontAwesomeIcon className='stockicon icons' icon={faBoxesStacked} />
                </Card.Title>
                <Card.Text className='text-center'>Products in Stock</Card.Text>
              </Card>
              </Col>
              <Col md={3}>
                <Card>
                <Card.Title className='text-center'>
                  {totalCategory} <FontAwesomeIcon className='categoryicon icons' icon={faFolderTree} />
                </Card.Title>
                <Card.Text className='text-center'>Total Categories</Card.Text>
              </Card>
              </Col>
              <Col md={3}>
                <Card>
                <Card.Title className='text-center'>
                  {onsale} <FontAwesomeIcon className='saleicon icons' icon={faHandHoldingDollar} />
                </Card.Title>
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
              
              <Col md={8} className='graphContainer'>
                  <Barchart categoryCount={categoryCount}/>
              </Col>
              <Col md={4}>
                <h5 className='text-center recentlyAdded'>Recently Added Products</h5>
                <Table  bordered hover>
                  <thead>
                    <th>Product Name</th>
                    <th>Quantities</th>
                  </thead>
                  <tbody>
                    {sortResult.map((sorted) => (
                      <tr key={sorted._id}>
                        <td>{sorted.pname}</td>
                        <td>{sorted.pprice}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Col>
            </Row>

          </Col>

        </Row>
</div>
  )
}
export default Inventory
