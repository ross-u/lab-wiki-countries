import { Link } from "react-router-dom";     // <== IMPORT

function Navbar() {
  return (
    <nav className="Navbar">
      <ul>
        <Link to="/"> WikiCountries </Link>             
      </ul>
    </nav>
  );
}

export default Navbar;




{/* <nav class="navbar navbar-dark bg-primary mb-3">
        <div class="container">
          <a class="navbar-brand" href="/">WikiCountries</a>
   
          >
      </nav> */}