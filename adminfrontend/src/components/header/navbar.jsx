import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate();

const username = localStorage.getItem('name')
    
const handleLogout = () =>{
  localStorage.removeItem('token');
  localStorage.removeItem('name');
 navigate('/login') 
}

    return(
      <>
        <Navbar className="navbar-dark bg-dark">
      <Container>
        <Navbar.Brand href="#home">ADMIN</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Welcome: {username}<FontAwesomeIcon icon={faPowerOff} className='logout-icon' onClick={handleLogout}/>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
    )
}

export default Navigation;