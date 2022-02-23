import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <h3>LAB - WikiCountries</h3>
            <NavLink to="/">Home</NavLink>
        </nav>
    )
}

export default Navbar