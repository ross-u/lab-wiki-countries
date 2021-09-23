import Countries from "../countries.json"
import { Link } from "react-router-dom"

function CountriesList() {


    return(
        <ul>

        {Countries.map((country) => (
            <li><Link to={country.alpha3Code}>{country.name}</Link></li>
        )


        )}

        </ul>
    )
};

export default CountriesList;