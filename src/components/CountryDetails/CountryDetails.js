import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function CountryDetails({ countriesData }) {
  const [matchedCountry, setMatchedCountry] = useState(null);
  const { alpha3Code } = useParams();

  useEffect(() => {
    const country = countriesData.find((countryObj) => {
      return countryObj.alpha3Code === alpha3Code;
    });
    if (country) setMatchedCountry(country);
  }, [alpha3Code, countriesData]);

  return (
    <>
      {!matchedCountry && <h3>Country not found!</h3>}
      {matchedCountry && (
        <div>
          <h1>{matchedCountry.name}</h1>
          <p>Capital: {matchedCountry.capital}</p>
          <p>Area: {matchedCountry.area}</p>
          <ul>
            {matchedCountry.borders.map((border) => (
              <li key={border}>{border}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default CountryDetails;
