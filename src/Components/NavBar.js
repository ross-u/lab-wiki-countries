import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="Navbar navbar-dark bg-primary mb-3">
            <div className="container">
                <div>
                    <NavLink to="/" className="navbar-brand">WikiCountries</NavLink>
                    <NavLink to="/CountriesList" className="navbar-brand" >Countries List</NavLink>
                   
                </div>
            </div>
        </nav>
    )
}

export default NavBar
