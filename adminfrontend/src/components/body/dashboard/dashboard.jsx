import Row from 'react-bootstrap/Row';
// import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Navigation from "../../header/navbar";
import Sidenavbar from "../sidenavbar/sidenavbar";
require('./dashboard.css')


const Dashboard = () => {
    return(
        <>
        <Navigation/>
            <Row>
                <Col md={2} className='sidebar'>
                   <Sidenavbar/>
                </Col>
                <Col md={10} className='main-container'></Col>
            </Row>        
        </>
    )
}

export default Dashboard;