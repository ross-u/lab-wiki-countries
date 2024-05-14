import Nav from 'react-bootstrap/Nav';
import './NavBar.css';

function NavBar() {
  return (
    <Nav className="justify-content-center p-3">
      <Nav.Item>
        <h2>
          WikiCountries <i className="fas fa-globe-americas"></i>
        </h2>
      </Nav.Item>
    </Nav>
  );
}

export default NavBar;
