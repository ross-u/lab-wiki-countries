import React from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';

export default function CountryDetails(props) {
  const countryId = props.match.params.id;
  const getCountry = (countryCode) =>
    countries.find((country) => country.alpha3Code === countryCode);
  // const country = countries.find(country => country.alpha3Code === countryId);
  const country = getCountry(countryId);
  // get the border country name
  // const borderCountry = countries.find(country => country.alpha3Code === borderCountry.alpha3Code);
  // console.log(country);
  let borderNames = [...country.borders];
  // console.log(borderCountries);
  const borderCountries = borderNames.map((borderCountry) => {
    //console.log(borderCountry);
    return getCountry(borderCountry);
  });
  console.log(borderCountries);
  return (
    <div class="col-7">
      <img src={`https://www.countryflags.io/${country.alpha2Code}/shiny/32.png`} alt={country.name}/>
      <h1>{country.name}</h1>
      <table class="table">
      <thead></thead>
      <tbody>
      <tr>
      <td>Capital</td> 
      <td>{country.name}</td>
      </tr>
      <tr>
      <td>Area</td> 
      <td>{country.area} km<sup>2</sup></td>
      </tr>
      <tr>
      <td>Borders</td>
      <td>
      <ul>
      {borderCountries.map((borderCountry) => {
        return (
          <Link to={`/${borderCountry.alpha3Code}`}><h6>{borderCountry.name}</h6></Link>
        )
      })}
      </ul>
      </td>
      </tr>
      </tbody>
      </table>
    </div>
  );
}