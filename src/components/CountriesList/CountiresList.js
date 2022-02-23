import "./CountriesList.css"
import { Route, Routes } from "react-router-dom"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import CountryDetails from "../CountryDetails/CountryDetails"

const CountriesList = () => {

    const [countries, setCountries] = useState([])

    useEffect(() => {
        axios
            .get("https://ih-countries-api.herokuapp.com/countries")
            .then(response => {
                setCountries(response.data)
            })
    }, [])

    return (
        <>
            <div>
                <Routes >
                    <Route CountryDetails={<CountryDetails />} />
                </Routes >
            </div>
            <div class="col-5 countryCol" >
                {countries.map(country => {

                    return (
                        <div key={`${country.alpha3Code}`}>
                            <Link to={`/${country.alpha3Code}`}>
                                <li className="list-group-item list-group-item-action" key={country.alpha3Code}>

                                    <p>{country.name.common}</p>

                                </li>
                            </Link >
                        </div>
                    )
                })}
            </div>
        </>
    )
}



export default CountriesList