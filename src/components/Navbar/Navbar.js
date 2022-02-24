
import {Link, NavLink} from "react-router-dom"

function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-primary mb-3">
            <div className="container">
                <div className="navbar-brand">
                <NavLink to="/" className ={({isActive})=> isActive ? "selected navbar-brand" : "navbar-brand" } > WikiCountries </NavLink>
                <NavLink to="/countriesList" className ={({isActive})=> isActive ? "selected navbar-brand" : "navbar-brand" } > Countries List </NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;