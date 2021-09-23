import React from 'react'
import { Link } from 'react-router-dom';

export default function CountryDetails(props) {
    const countryId = props.match.params.alpha3Code;
    const country = props.countries.find(country => country.alpha3Code === countryId)
    const newBorders = country.borders.map((border => {
        return props.countries.find(country => country.alpha3Code === border)
    })).map(country => {
        return (
            <li key={country.name}><Link to={`/${country.alpha3Code}`}>{country.name}</Link></li>
        )
    })
    return (
        <div>
           <img src={`https://www.countryflags.io/${country.alpha2Code}/flat/64.png`} alt={country.name} />
            <h1>{country.name}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width:"30%"}}>Capital</td>
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
                        {newBorders}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
        </div>
    )
}
