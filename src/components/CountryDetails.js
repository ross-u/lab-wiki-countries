import React from 'react'
import { Link } from 'react-router-dom';
import allCountries from "../countries.json"

export default function CountryDetails(props) {
    const countryId = (props.match.params.id)
    const country = allCountries.find((country) => country.alpha3Code === countryId)
    if (country) {
        const borders = country.borders.map((borderId) => {
        return <p><Link to={`/${borderId}`}>{allCountries.find((country) => borderId === country.alpha3Code).name}</Link></p>
    })
        return (
            <div>
               <p>{country.name}</p>
               <p>{country.capital}</p>
               <p>{country.population}</p>
               {borders && <div>{borders}</div>}
               
            </div>
        )
    } else {
        return <></>
    }
}
