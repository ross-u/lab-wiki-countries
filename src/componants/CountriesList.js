import React from 'react';
import { Link } from 'react-router-dom';
import countriesArr from '../countries.json';

export default function CountriesList(props) {
    const countriesList = countriesArr.map(country => {
        return (
            <div class="container" key={country.alpha3Code}>
                <div className="row">
                <div className="col-5">
                <div className="list-group">
                <Link className="list-group-item list-group-item-action" to={`/${country.alpha3Code}`}>
                <img src={`https://www.countryflags.io/${country.alpha2Code}/shiny/64.png`} />
                        {country.name}
                    </Link>
                </div>
                </div>
                </div>
            </div>
        )
    });
    
    return (
        <div>
            {countriesList}
        </div>
    )
}
