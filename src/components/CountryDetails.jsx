import React from 'react'
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import countriesList from "../countries.json"

export default function CountryDetails(props) {
    const foundCountry = countriesList.find((countryObj) => {
    return countryObj.alpha3Code === props.match.params.countryId; //this is a standard prop object!
  });

  return (
    <div>
      <h1>Country Details</h1>
      {!foundCountry && <h3>Country not found!</h3>}

      {foundCountry && (
        <>
         <img src={`https://www.countryflags.io/${foundCountry.alpha2Code}/flat/32.png`}  alt={`${foundCountry.name}'s flag, yo!`} />
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
    <td><ul>{foundCountry.borders.map((borders)=>(<li><Link to={`/${borders}`}>{borders}</Link></li>))}</ul></td>
  </tr>
</table>
          
          
          {/* <Link to="/">Back</Link> */}
        </>
      )}
    </div>
  ); 

}
