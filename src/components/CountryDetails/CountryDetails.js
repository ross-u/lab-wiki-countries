import { useState } from 'react'
import { useParams } from 'react-router-dom'
import countries from './../../countries.json'

const CountryDetails = () => {
    const [countriesList, setCountriesList] = useParams(countries)
    return (
        countriesList.filter(elm => {
            return (
                <div className='countryDetails' key={elm.alpha3Code}>
                    <h3>{elm.name}</h3>
                    <p>{elm.alpha3Code}</p>
                </div>
            )
        })
    )
}

export default CountryDetails