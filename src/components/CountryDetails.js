import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import countries from './../countries.json';

function CountrytDetailsPage(props) {
  const [foundCountry, setFoundCountry] = useState(null);

  useEffect(() => {
    const country = country.Data.find((countryObj) => {
      return countryObj._id === props.match.params.countryId;
    });

    if (country) setFoundCountry(country);
  }, [props.match.params.countryId]);

  return (
    <div>
      <h1>WikiCountries</h1>
      {!foundCountry && <h3>Country not found!</h3>}

      {foundCountry && (
        <>
          <h2>{foundCountry.name}</h2>
          <h3>Country Details: {foundCountry.name}</h3>
          <p>{foundCountry.alpha3Code}</p>
          <Link to="/countries">Back</Link>
        </>
      )}
    </div>
  );
}

export default CountrytDetailsPage;
