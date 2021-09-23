import React from 'react'
import countries from '../countries.json'

export default function CountryDetails(props) {

    const countryCode = props.match.params.countryCode

    console.log(countryCode)

    const country = countries.find(country => {
        return country.alpha3Code === countryCode
    })

    return (
        <div class="col-7">
            <h1>{country.name}</h1>
        </div>
    )
}
