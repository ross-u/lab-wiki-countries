import React from 'react';
import {useParams, Link} from 'react-router-dom'
import {useEffect, useState} from 'react'

function CountryDetails(props) {
    const {alpha3Code} = useParams();
    const [country,
        setCountry] = useState({})

    useEffect(() => {
        const allCountries = props.countries
        const detailCountry = allCountries.filter((filteredCountry) => filteredCountry.alpha3Code === alpha3Code)
        setCountry(detailCountry[0])

    }, [alpha3Code])

    //console.log(country.borders)
    return (
        <div>
            <h1>Country Details</h1>
            <div>

                <div className="col-7">
                    <img
                        src={`https://flagpedia.net/data/flags/icon/72x54/${country
                        ?.alpha2Code
                            ?.toLowerCase()}.png`}
                        alt="country flag"/>
                    <h1>{country
                            ?.name
                                ?.common}</h1>
                    <table className="table">
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td>Capital</td>
                                <td>{country
                                        ?.capital}</td>
                            </tr>
                            <tr>
                                <td>Area</td>
                                <td>
                                    {country
                                        ?.area}
                                    km
                                    <sup>2</sup>
                                </td>
                            </tr>
                            <tr>
                                <td>Borders</td>
                                <td>
                                    <ul>
                                        {country
                                            ?.borders
                                                ?.map(border => {
                                                    return (
                                                        <li>
                                                            <Link to={`/${border}`}>{border}</Link>
                                                        </li>
                                                    )
                                                })}
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <Link to="/">Back</Link>
        </div>
    )
}

export default CountryDetails