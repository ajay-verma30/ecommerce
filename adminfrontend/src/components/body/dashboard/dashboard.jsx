import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTableColumns } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faWarehouse } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
// import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Navigation from "../../header/navbar";
require('./dashboard.css')


const Dashboard = () => {
    return(
        <>
        <Navigation/>
            <Row>
                <Col md={2} className='sidebar'>
                   <Container>
                    <ul>
                        <li className='menu-start'><FontAwesomeIcon icon={faTableColumns} /> Dashboard</li>
                        <li className='menu'><FontAwesomeIcon icon={faWarehouse} /> INVENTORY </li>
                        <li className='menu'><FontAwesomeIcon icon={faUsers} /> USERS </li>
                        <li className='menu'><FontAwesomeIcon icon={faComment} /> REVIEWS </li>
                    </ul>
                    </Container> 
                </Col>
                <Col md={10} className='main-container'></Col>
            </Row>        
        </>
    )
}

export default Dashboard;