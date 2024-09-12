import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <nav class="navbar navbar-dark bg-primary mb-3">
            <div class="container">
                <Link class="navbar-brand" to="/">WikiCountries</Link>
            </div>
        </nav>
    )
}
