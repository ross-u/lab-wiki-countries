import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import countries from './../countries.json';

function Countrieslist(props) {
  const [countries, setCountries] = useState([]);

  // This effect depends on `props.countries`.
  // It will run on initial render and every time
  // when the `props.projects` gets updated.
  useEffect(() => {
    setCountries(props.countries);
  }, [props.countries]);

  return (
    <div>
      <h1>Countries</h1>
      {countries.map((country) => {
        return (
          <div key={countries._id} className="country">
            <h3>
              <Link to={`/countries/${country.alpha3Code}`}>
                {country.name}
              </Link>
            </h3>
            <p>{country.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Countrieslist;
