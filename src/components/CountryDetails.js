import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';

function CountryDetail({ countries }) {
  const { id } = useParams();
  const [listCountries] = useState(countries);

  const country = listCountries.find((elem) => elem.alpha3Code === id);

  return (
    <div>
      <div className="d-flex flex-column align-items-center">
        <img
          width="150px"
          src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
          alt="flag"
        />
        <h1 className="fw-bold fs-2 m-5">{country.name.common}</h1>
      </div>
      <div className="row text-center">
        <div className="col-md-6">
          <span className="fw-bold fs-4">Capital:</span>
        </div>
        <div className="col-md-6">
          <span>{country.capital}</span>
        </div>
        <hr />
      </div>
      <div className="row text-center">
        <div className="col-md-6">
          <span className="fw-bold fs-4">Area:</span>
        </div>
        <div className="col-md-6">
          <span>{country.area} KM</span>
        </div>
      </div>
      <hr />
      <div className="row text-center">
        <div className="col-md-6">
          <span className="fw-bold fs-4">Borders:</span>
        </div>
        <div className="col-md-6">
          <ul>
            {country.borders.map((border) => {
              return (
                <li key={border} className="list-unstyled">
                  <Link className="text-decoration-none" to={`/${border}`}>
                    {border}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CountryDetail;
