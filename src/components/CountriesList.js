import React from 'react'
import {Link} from 'react-router-dom'


export default function CountriesList({countries}) {
    return (
        <div class="list-group">
            {countries.map((country)=>{
                return(
                    <Link to={`/country/${country.alpha3Code}`} class="list-group-item list-group-item-action">{country.name}
                    </Link>
                )
            })}
        </div>
    )
}
