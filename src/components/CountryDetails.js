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
    <div>
      <h3>Capital: {country.name}</h3>
      <h3>Area: {country.area} km2</h3>
      {borderCountries.map((borderCountry) => {
        return (
            <Link to={`/${borderCountry.alpha3Code}`}><h5>{borderCountry.name}</h5></Link>
        )
      })}
    </div>
  );
}