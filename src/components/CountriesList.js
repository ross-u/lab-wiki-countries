import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";

function CountriesList({ countries }) {
  return (
    <div className="List">
      {countries.map((country) => (
        <div key={country.alpha3Code}>
          <Link to  = {`/details/${country.alpha3Code}`}>
            <img
              src={`
https://www.countryflags.io/${country.alpha2Code}/shiny/64.png`}
              alt={country}
            />

            <p>{country.name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default CountriesList;


