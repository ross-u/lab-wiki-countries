import React from 'react';

import { Link } from 'react-router-dom';

export default function CountriesList({ countries }) {
  return (
    <div>
      <ul>
        {countries.map((el, i) => {
          return (
            <li>
              <Link to={`/country/${el.cca3}`} key={`${i}`}>
                <img
                  src={`https://www.countryflags.io/${el.cca2}/flat/32.png `}
                />{' '}
                - {el.name.common}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
