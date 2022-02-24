import { Link } from "react-router-dom"
import CountryDetails from "../CountryDetails/CountryDetails";

function CountriesList({ countries }) {

    const displayCountries = (theCountries) => theCountries.map(elm =>

        <div key={elm.alpha3Code} >

            <Link to={`/CountryDetails/${elm.alpha3Code}`} className ={({isActive})=> isActive ? "selected" : "" }> {elm.name.common} </Link>

        </div>

    )

    return (
        <div>
 
            <h1>Countries List</h1>
            <hr />
            {displayCountries(countries)}

        </div>

    )

}

export default CountriesList;