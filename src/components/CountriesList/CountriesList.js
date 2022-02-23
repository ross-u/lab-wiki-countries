import './CountriesList.css';
import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

function CountriesList({ countries }) {
  //   const [countries, setCountries] = useState([]);

  //     useEffect(() => {
  //         setCountries(countries);
  //     }, []);

  return (
    <div className="col-md-4">
      <h3>Countries</h3>
      {countries.map((country) => {
        return (
          <div key={country.alpha3Code}>
            <div key={country.name.common}>
              {country.name.common}
              <br />
              <Link to={`/countrydetails/${country.alpha3Code}`}>
                <img
                  src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                  alt={country.name}
                />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CountriesList;
