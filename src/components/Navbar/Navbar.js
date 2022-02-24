import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'

function Navbar() {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <NavLink className={'navlink'} to='/'>WikiCountries</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

        </nav>
    )
}
export default Navbar