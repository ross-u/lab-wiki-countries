import { Link, useParams } from 'react-router-dom'

import { useState, useEffect } from 'react'

import axios from 'axios';

function CountryDetails() {

    const { country_id } = useParams()

    const [foundCountry, setFoundCountry] = useState({})

    useEffect(() => {
        axios
            .get(`https://ih-countries-api.herokuapp.com/countries/${country_id}`)
            .then((response) => {
                console.log(response.data)
                setFoundCountry(response.data);
            })
    }, [country_id])

    console.log(foundCountry)

    return (
        <div className="col-7">

            <p>{foundCountry.name.common}</p>
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`} alt="country flag" />
            <h1>{foundCountry.name.common}</h1>
            <table class="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td>Capital</td>
                        <td>{foundCountry.capital[0]}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>{foundCountry.area} km <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                {
                                    foundCountry.borders.map((elm) => {
                                        return <li key={elm}><Link to={`/${elm}`}>{elm}</Link></li>
                                    })
                                }
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CountryDetails