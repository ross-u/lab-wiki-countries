import React from 'react'
import {NavLink} from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <nav  className="navbar navbar-dark bg-primary mb-3">
        <NavLink to="/" className={({ isActive }) => isActive ? 'selected' : ''}>WikiCountries</NavLink>
    </nav>
    
  )
}

export default Navbar