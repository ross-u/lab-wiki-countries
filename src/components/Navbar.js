import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div class="navbar navbar-dark bg-primary mb-3">
            <Link to="/"><h1 class="navbar-brand">WikiCountries</h1></Link>
        </div>
    )
};