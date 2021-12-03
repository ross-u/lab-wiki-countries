import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

import countries from '../countries.json'

const CountryDetails = () => {
  const params = useParams()
  const countryId = params.id

  const country = countries.find(country => country.alpha3Code === countryId)
  
  const getCountryName = (countryCode) => {
    let borderCountry = countries.find(country => country.alpha3Code === countryCode)
    return borderCountry.name.official
  }

  return (
    <div className="col-7">
      <img
        src={`https://flagcdn.com/28x21/${country.alpha2Code.toLowerCase()}.png`} 
        alt={`${country.name.official} country-flag`}
        style={{width: "300px"}}
      />
      <h1>{country.name.official}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{width: "30%"}}>Capital</td>
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
              <ul>
                {country.borders.length !== 0 && country.borders.map(borderCountry => (
                <li key={borderCountry} style={{listStyleType: 'none'}}>
                  <Link to={`/${borderCountry}`}>{getCountryName(borderCountry)}</Link>
                </li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CountryDetails;
