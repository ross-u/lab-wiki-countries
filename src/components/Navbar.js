import { Link } from "react-router-dom";     // <== IMPORT
function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container-fluid">
        <a class="navbar-brand" href="#">      Wiki Countries
        </a>
      </div>
    </nav>
  );
}

export default Navbar;