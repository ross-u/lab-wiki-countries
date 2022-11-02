
import { Link } from "react-router-dom"

function CountriesList(props) {

    return(
        <ul>

        {props.countriesList.map((country) => (
            
            <li>
                <img src={`https://www.countryflags.io/${country.alpha2Code}/flat/32.png`}></img>
                <Link to={country.alpha3Code}>{country.name}</Link>
            </li>
        )


        )}

        </ul>
    )
};

export default CountriesList;