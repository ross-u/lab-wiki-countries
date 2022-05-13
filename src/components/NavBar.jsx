import { Link } from "react-router-dom"

function NavBar(){
    return (
        <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          {/* <a className="navbar-brand" href="/">WikiCountries</a> */}
          <Link className="navbar-brand" to="/">WikiCountries</Link>
   
          </div>
      </nav>
    )
}

export default NavBar