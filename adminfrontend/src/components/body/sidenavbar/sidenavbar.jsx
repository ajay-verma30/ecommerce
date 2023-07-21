import React from 'react'
import Container from 'react-bootstrap/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTableColumns } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faWarehouse } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import NavDropdown from 'react-bootstrap/NavDropdown';
require('./sidenav.css')

const Sidenavbar = () => {
    return (
        <div>
            <Container>
                <ul>
                    <li className='menu-start'><FontAwesomeIcon icon={faTableColumns} /><Link to='/dashboard'> Dashboard</Link></li>
                    <li className='menu'>
                        <NavDropdown title="Inventory" id="basic-nav-dropdown">
                            <NavDropdown.Item><Link to='/addinventory'>Add Product</Link></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item><Link to='/editinventory'>Edit Product</Link></NavDropdown.Item>
                            <NavDropdown.Divider />
                        </NavDropdown>
                    </li>

                    <li className='menu'><FontAwesomeIcon icon={faUsers} /> Users </li>
                    <li className='menu'><FontAwesomeIcon icon={faComment} /> Reviews </li>
                </ul>
            </Container>
        </div>
    )
}

export default Sidenavbar
