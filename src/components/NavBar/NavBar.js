import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="Navbar navbar navbar-dark bg-primary mb-3">
            <div className="container">
                <NavLink to="/" className={({ isActive }) => isActive ? "selected navbar-brand" : "navbar-brand"}>WikiCountries</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;