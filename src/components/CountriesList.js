import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import countries from '../countries.json';

const list = countries.map(country => {
        return (
            <>
                <img key={uuid()} src={`https://www.countryflags.io/${country.alpha2Code}/flat/32.png`} alt="small-country-flag"/>
                <h6 key={uuid()}>
                    <Link to={`/${country.alpha3Code}`}>{country.name}</Link>
                </h6>
            </>
        )
    })


export default function CountriesList() {
    return (
        <div>
            {list}
        </div>
    )
}
