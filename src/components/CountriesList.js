import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import countriesData from '../countries.json'
import axios from 'axios'
export default function CountriesList() {
    const [countries, setCountries] = useState(null)

    useEffect(() => {
        axios.get('https://ih-countries-api.herokuapp.com/countries')
            .then(apiData => setCountries(apiData.data))
            .catch(error => console.log(error))
    }, [])

    if (!countries) return <></>
    const countriesList = countries.map(country => {

        let imgSrc = `https://flagpedia.net/data/flags/h120/${country.alpha2Code.toLowerCase()}.png`
        return <>
            <Link to={`/countries/${country.alpha3Code}`}>
                <img src={imgSrc} alt="" />
                <p>{country.name.official}</p>
            </Link>
        </>
    })

    return (
        <div>
            {countriesList}
        </div>
    )
}
