import React from 'react'
import {Link} from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <nav>
                <li>
                    <Link to="/" class="navbar-brand">WikiCountries</Link>
                </li>
            </nav>
        </div>
    )
}
