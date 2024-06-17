import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
            <Link className="navbar-brand mb-0 h1" to="/">WikiCountries</Link>   
            </div>
            
        </nav>
    )
}
