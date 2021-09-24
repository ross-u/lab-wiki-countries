import React from 'react'
import { Link } from 'react-router-dom';
import allCountries from "../countries.json"

export default function CountryDetails(props) {
    const countryId = (props.match.params.id)
    const country = allCountries.find((country) => country.alpha3Code === countryId)
    if (country) {
        return (
            <div>
               <p>{country.name}</p>
            </div>
        )
    } else {
        return <></>
    }
}
