import {Link} from "react-router-dom"

const CountriesList = ({country}) => {

    return (
        <Link to={`/${country.alpha3Code}`} className="list-group-item list-group-item-action">
            <img src={`https://www.countryflags.io/${country.alpha2Code}/flat/32.png`}/>
            <p>{country.name.official}</p>
        </Link>
    );
}

export default CountriesList;