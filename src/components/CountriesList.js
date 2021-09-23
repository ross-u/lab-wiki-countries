import React from 'react'
import { Link } from 'react-router-dom';

export default function CountriesList(props) {
    const countriesList = props.countries.map(country => {
        return (
            <Link class="list-group-item list-group-item-action" to={`/${country.alpha3Code}`}>
                <img src={country.flag} />
                <p>{country.name}</p>
            </Link>
        )
    })
    return (
        <div>
            {countriesList}
        </div>
    )
}
