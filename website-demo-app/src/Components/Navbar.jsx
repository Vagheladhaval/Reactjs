import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      
      <Nav className='nav navbar bg-dark text-white'>
        <Link className='navbar-brand ms-5'>Flipkart APP</Link>
        <ul>
            <li><Link to='/' >Home</Link></li>
            <li><Link to='/about-us' >About</Link></li>
            <li><Link to='/our-services' >Services</Link></li>
            <li><Link to='/our-gallery' >Gallery</Link></li>
            <li><Link to='/feedback' >Feedback</Link></li>
            <li><Link to='/contact-us' >Contact</Link></li>
        </ul>
      </Nav>



    </div>
  )
}
