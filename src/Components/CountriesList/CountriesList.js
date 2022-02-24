import React from 'react'
import countries from '../../countries.json'
import { Link } from "react-router-dom";

function CountriesList() {
    return (
        <div>
            <h2>CountriesList</h2>
            {
                countries.map(country => {

                    return (
                        <div key={country.alpha3Code} className="project">
                            <h3>{country.name.official}</h3>


                            <Link to={`/${country.alpha3Code}`}> {country.name.official}</Link>
                        </div>
                    )

                })
            }
        </div>
    )

}

export default CountriesList