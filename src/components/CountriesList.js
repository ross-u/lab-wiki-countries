import { useState } from 'react';
import { Link } from 'react-router-dom';
import countriesData from '../countries.json';

function CountriesList() {
  return (
    <div class="col-5" style={{ maxHeight: '100vh', overflow: 'scroll' }}>
      <ul class="list">
        {countriesData.map((country) => (
          <li class="list-group-item list-group-item-action" href="/ABW">
            <Link to={`/${country.alpha3Code}`}>
              <img
                src={`https://www.countryflags.io/${country.alpha2Code}/flat/32.png`}
                alt={`${country.name}`}
              />
              <h2>{country.name}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default CountriesList;
