import React from 'react'
import { Link } from "react-router-dom";
import countriesList from "../countries.json"

export default function CountryDetails(props) {
    const foundCountry = countriesList.find((countryObject) => {
    return countryObject.alpha3Code === props.match.params.countryId;
  });

  return (
    <div>
      <h1>Conutry Details</h1>
        {!foundCountry && <h3>Not found!</h3>}

            {foundCountry && (
        <div>
                <img src={`https://www.countryflags.io/${foundCountry.alpha2Code}/flat/32.png`}  
                    alt={`${foundCountry.name}`} />
                        <h2>{foundCountry.name}</h2>

    <table>
        <tr>
            <td>Capital</td>
            <td>{foundCountry.capital}</td>
        </tr>
        <tr>
            <td>Area</td>
            <td>{foundCountry.area}</td>
        </tr>
        <tr>
        <td>Borders</td>
        <td>
        <ul>
            {foundCountry.borders.map((borders)=>
            (<li>
                <Link to={`/${borders}`}>{borders}
                </Link>
            </li>)
                )
            }
            </ul>
            </td>
        </tr>
    </table>
        </div>
      )}
    </div>
  )
};