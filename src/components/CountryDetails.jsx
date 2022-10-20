import React from 'react';
import { Link } from 'react-router-dom';

export default function CountryDetails(props) {
  const countries = props.countries;
  const foundCountry = countries.find((countryObj) => {
    return countryObj.alpha3Code === props.match.params.countryId; //this is a standard prop object!
  });

  return (
    <div>
      <h1>Country Details</h1>
      {!foundCountry && <h3>Country not found!</h3>}

      {foundCountry && (
        <>
          <img
            src={`https://www.countryflags.io/${foundCountry.alpha2Code}/flat/32.png`}
            alt={`${foundCountry.name}'s flag, yo!`}
          />
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
                  {foundCountry.borders.map((border, i) => (
                    <li key={'bordersId' + i}>
                      <Link to={`/${border}`}>
                        {props.countries.map((country, i) => {
                          if (country.alpha3Code === border) {
                            return <p key={'bordersId' + i}>{country.name}</p>;
                          } else return null;
                        })}
                      </Link>
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          </table>

          {/* <Link to="/">Back</Link> */}
        </>
      )}
    </div>
  );
}
