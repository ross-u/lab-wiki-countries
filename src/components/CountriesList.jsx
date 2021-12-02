import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import countriesJSON from '../countries.json'

const CountriesList = () => {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    setCountries(c => c = countriesJSON)
  }, [])
  
  return (
    <div className="container">
    <div className="row">
      <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
      {countries.map(country => (
        <div className="list-group" key={country.alpha2Code}>
          <Link to={`/${country.alpha3Code}`} className="list-group-item list-group-item-action">
            <img src={`https://flagcdn.com/28x21/${country.alpha2Code.toLowerCase()}.png`} alt={`${country.name.official} country-flag`}/>
            <p>{country.name.official}</p>
          </Link>
        </div>
      ))}
      </div>
    </div>
  </div>
  )
}

export default CountriesList
