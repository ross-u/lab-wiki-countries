import React from 'react'
import { Link } from 'react-router-dom';

export default function CountriesList(props) {
    const countriesList = props.countries.map(country => {
        return (
            <Link className="list-group-item list-group-item-action" to={`/${country.alpha3Code}`} key={country.alpha3Code}>
                <img src={`https://www.countryflags.io/${country.alpha2Code}/flat/64.png`} alt={country.name} />
                <p>{country.name}</p>
            </Link>
        )
    })
    return (
        <div >
            {countriesList}
        </div>
    )
}
