import Countries from "../countries.json"
import { Link } from "react-router-dom"

function CountryDetails(props) {
    console.log("props : ", props)
    let countryFiltered = Countries.filter((country) => props.match.params.alpha3Code === country.alpha3Code)
    console.log("countryFiltered: ", countryFiltered)


    return (

    <div>
        <h3>CountryDetails</h3>
        <ul>
            <li>Name: {countryFiltered[0].name}</li>
            <li>Capital: {countryFiltered[0].capital}</li>
            <li>Region: {countryFiltered[0].region}</li>
            <li>Population: {countryFiltered[0].population}</li>
            <img src={`https://www.countryflags.io/${countryFiltered[0].alpha2Code}/flat/32.png`}></img>

        </ul>


    </div>

    )
};

export default CountryDetails;