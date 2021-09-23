import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import countries from '../countries.json';



export default function CountryDetails(props) {

    const countryA3C = props.match.params.A3C;
    // console.log(countryA3C);

    const country = countries.find(country => country.alpha3Code === countryA3C);
    // console.log(country);

    const borders = country.borders.map(border => {
        const linkTo = countries.find(country => country.alpha3Code === border);
        //console.log(linkTo);

        return (
            <h6 key={uuid()}>
                <Link to={`/${linkTo.alpha3Code}`}>{linkTo.name}</Link>
            </h6>
        )
    })

    return (
        <div>
            <img key={uuid()} src={`https://www.countryflags.io/${country.alpha2Code}/flat/64.png`} alt="small-country-flag"/>
            <h1>{country.name}</h1>
            <h5>Capital: {country.capital}</h5>
            <h5>Population: {(new Intl.NumberFormat('de-DE').format(country.population))}</h5>
            <h5>Borders: {borders}</h5>
        </div>
    )
}
