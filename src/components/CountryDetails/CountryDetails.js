import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import countries from '../../countries.json';

function CountryDetails() {
  const { alpha3Code } = useParams();

  const [country, setCountry] = useState(countries);
  const [countryCopy, setCountryCopy] = useState(countries);

  useEffect(() => {
    setCountryCopy(countryCopy.filter((elm) => alpha3Code === elm.alpha3Code));
  }, []);

  return (
    <div className="col-6 country-info">
      <card>
        <img
          src={`https://flagpedia.net/data/flags/icon/72x54/${countryCopy[0].alpha2Code.toLowerCase()}.png`}
        />
        <h3>{countryCopy[0].name.common} </h3>
        <hr />

        <p>
          <strong>Capital:</strong> {countryCopy[0].capital}
        </p>
        <hr />
        <p>
          <strong>Area:</strong> {countryCopy[0].area} km²
        </p>
      </card>
    </div>
  );
}

export default CountryDetails;
