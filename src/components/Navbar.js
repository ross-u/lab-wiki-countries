import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav class="navbar navbar-dark bg-primary mb-3">
      <Link to="/"> WikiCountries </Link>
    </nav>
  );
}

export default Navbar;
