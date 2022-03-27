import {Link} from 'react-router-dom';

function Navbar(){

    return (
        <nav class="navbar navbar-dark bg-dark">
            <span class="navbar-text mx-auto">
                <Link className="navbar-brand" to="/">
                LAB - WikiCountries
             </Link>
            </span>
        </nav>
    );

}

export default Navbar;