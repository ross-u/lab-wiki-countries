import React from 'react'

export default function CountryDetails(props) {
    const countryId = props.match.params.alpha3Code;

    const country = props.countries.find(country => country.alpha3Code === countryId)
    console.log(country);
    return (
        <div>

        </div>
    )
}