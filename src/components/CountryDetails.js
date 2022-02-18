import React from 'react'
import countries from '../countries.json'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function CountryDetails(props) {



    const getCountry = (cca3) => countries.find(country => country.alpha3Code === cca3);

    const country = { ...getCountry(props.match.params.countryCode) };

    const borders = country.borders.map(cca3 => getCountry(cca3));


    console.log(borders)
    console.log(country)

    return (
        <div className="col-7 country-details-div">
            <h1>{country.name}</h1>
            <div>
                <br />
                <h4>Area:{country.area}</h4>
                <ul>
                    {borders.map(el => {
                        return (
                            <li key={el.alpha3Code}>
                                <Link to={`/${el.alpha3Code}`}>
                                    {el.name}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
