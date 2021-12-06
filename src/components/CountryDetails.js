import axios from 'axios'
import React, { useState, useEffect } from 'react'
// import countriesData from '../countries.json'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function CountryDetails() {

    // const [countries, setCountries] = useState(null)    
    const [countries, setCountries] = useState(null)
    const [country, setCountry] = useState(null)


    const params = useParams()
    const alpha3code = params.alpha3code

    useEffect(() => {

        axios.get('https://ih-countries-api.herokuapp.com/countries')
        .then(apiData =>  setCountries(apiData.data))
        .catch(error => console.log(error))
    }, [])

    useEffect(() => {

        axios.get(`https://ih-countries-api.herokuapp.com/countries/${alpha3code}`)
        .then(apiData =>  setCountry(apiData.data))
        .catch(error => console.log(error))
    }, [alpha3code])



    if (!country || !countries) return <></>

    function getCountry(code) {
        const result = countries.find(c => c.alpha3Code === code)
        return result
    }

    // const country = getCountry(alpha3code)

    // console.log('project', alpha3code)

    // const project = myProjects.find()


    return (

        <>
            <img src={`https://flagpedia.net/data/flags/h120/${country.alpha2Code.toLowerCase()}.png`} alt="country flag"
                style={{ width: '300px' }} />
            <h1>{country.name.official}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td style={{ width: "30%" }}>Capital</td>
                        <td>{country.capital}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>
                            {country.area} km <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <div style={{ display: 'flex', 'flex-direction': 'column' }}>
                                <ul>
                                    {
                                        country.borders.map(borderAlpha3 => {
                                            return <li>
                                                <Link to={`/countries/${borderAlpha3}`}>{getCountry(borderAlpha3).name.official}</Link>
                                            </li>
                                        })
                                    }
                                </ul>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}