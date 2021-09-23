import countries from '../countries.json';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

function CountriesList() {
  const [countriesList, setCountriesList] = useState(countries);

  return (
    <div>
      <ul>
        {countriesList.map((country) => {
          return (
            <Link className="linkCountry" to={`/${country.alpha3Code}`}>
              <div>
                <img
                  src={`https://www.countryflags.io/${country.alpha2Code}/flat/32.png`}
                />
                <h3>{country.name}</h3>
              </div>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default CountriesList;
