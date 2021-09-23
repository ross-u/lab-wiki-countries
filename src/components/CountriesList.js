import React from 'react'
import { Link } from 'react-router-dom'

export default function CountriesList(props) {

    return (

        <>
            <div class="list-group">
                {props.Countries.map(country => {
                    return (
                        <div key={country.alpha3Code}>
                            <Link to={`/${country.alpha3Code}`}
                                class="list-group-item list-group-item-action"
                                key={country.alpha3Code}
                            >
                                <img src={`https://www.countryflags.io/${country.alpha2Code}/shiny/64.png`} alt={`Flag of ${country.name}`} />
                                <p>{country.name}</p>

                            </Link>
                        </div>)
                })}
            </div>

        </>


    )
}

