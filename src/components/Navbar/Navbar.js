import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-primary mb-3">
      <div className="container">
        <a className="navbar-brand">LAB - WikiCountries</a>
      </div>
    </nav>
  );
}

export default Navbar;
