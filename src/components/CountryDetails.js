import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import countriesData from '../countries.json';

function CountryDetails(props) {
  const foundCountry = countriesData.find((countryObj) => {
    return countryObj.alpha3Code === props.match.params.countryId;
  });

  return (
    <div>
      <h1>Country Details</h1>
      {!foundCountry && <h3>Country not found!</h3>}
      {foundCountry && (
        <>
          <img
            src={`https://www.countryflags.io/${foundCountry.alpha2Code}/flat/32.png`}
            alt={`${foundCountry.name}`}
          />
          <h2>{foundCountry.name}</h2>
          <table>
            <tr>
              <td>
                <b>Capital:</b>
              </td>
              <td>{foundCountry.capital}</td>
            </tr>
            <tr>
              <td>
                <b>Area:</b>
              </td>
              <td>{foundCountry.area}</td>
            </tr>
            <tr>
              <td>
                <b>Borders:</b>
              </td>
              <td>
                <ul>
                  {foundCountry.borders.map((borders) => (
                    <li>
                      <Link to={`/${borders}`}>{borders}</Link>
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          </table>
        </>
      )}
    </div>
  );
}
export default CountryDetails;
