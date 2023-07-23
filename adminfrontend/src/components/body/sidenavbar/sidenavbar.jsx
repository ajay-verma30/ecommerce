import React from 'react'
import Container from 'react-bootstrap/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTableColumns } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faWarehouse } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
require('./sidenav.css')

const Sidenavbar = () => {
    return (
        <div >
            <Container>
                <ul>
                    <li className='menu-start'><FontAwesomeIcon icon={faTableColumns} /><Link to='/dashboard'> Dashboard</Link></li>
                    <li className='menu'><FontAwesomeIcon icon={faWarehouse} /><Link to="/inventory"> Inventory</Link></li>
                        <ul>
                            <li><Link to='/inventory/addinventory' className='submenu btn'><FontAwesomeIcon icon={faPlus} /> Add Product</Link></li>
                            <li><Link to='/inventory/editinventory' className='submenu btn'><FontAwesomeIcon icon={faPencil} /> Edit Product</Link></li>
                        </ul>
                    <li className='menu'><FontAwesomeIcon icon={faUsers} /> Users </li>
                    <li className='menu'><FontAwesomeIcon icon={faComment} /> Reviews </li>
                </ul>
            </Container>
        </div>
    )
}

export default Sidenavbar