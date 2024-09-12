import countriesList from '../countries.json';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function CountryDetails(props) {
  const [countries, setCountries] = useState({
    name: '',
    alpha3Code: '',
    capital: '',
    area: '',
    flag: '',
    borders: [],
  });
  console.log(props);

  const { id } = useParams();

  console.log(`params`, id);

  useEffect(() => {
    const country = countriesList.find((countryObj) => {
      return countryObj.alpha3Code === id;
    });

    if (country) setCountries(country);
  }, [id]);

  console.log(countries);

  const codeToName = (alpha3Code) => {
    const nameObj = countriesList.find((countryObj) => {
      return countryObj.alpha3Code === alpha3Code;
    });
    console.log(nameObj);
    return nameObj.name;
  };

  return (
    <div>
      <img
        className="img-details"
        src={`https://web.archive.org/web/20210723151325/https://restcountries.eu/data/${countries.alpha3Code.toLowerCase()}.svg`}
        alt=""
      />
      <h1>{countries.name}</h1>
      <div className="row">
        <div className="col-6">
          <h4>Capital</h4>
        </div>
        <div className="col-6">
          <h4>{countries.capital}</h4>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-6">
          <h4>Area</h4>
        </div>
        <div className="col-6">
          <h4>{countries.area}</h4>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-6">
          <h4>Borders</h4>
        </div>
        <div className="col-6">
          <h4>
            {countries.borders.map((alpha3Code) => {
              return (
                <Link
                  key={alpha3Code}
                  to={`/countryDetails/${alpha3Code}`}
                  className="linkStyle"
                >
                  <p>{codeToName(alpha3Code)}</p>
                </Link>
              );
            })}
          </h4>
        </div>
      </div>
    </div>
  );
}
