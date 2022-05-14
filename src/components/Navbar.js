import {Link} from 'react-router-dom'


const Navbar = () => {
    return (
    <div>
        <nav className="navbar navbar-dark bg-primary mb-3">
            <div className="container">
                <Link to='/'>
                    Wiki Countries
                </Link>
            </div>
        </nav>
    </div>
    );
}

export default Navbar