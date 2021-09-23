import countriesList from '../countries.json';
import { useState, useEffect } from 'react';

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

  const id = props.match.params.id;

  console.log(id);

  useEffect(() => {
    const country = countriesList.find((countryObj) => {
      return countryObj.alpha3Code === id;
    });

    if (country) setCountries(country);
  }, [id]);

  console.log(countries);

  return (
    <div>
      <img
        className="img-details"
        src={`https://web.archive.org/web/20210723151325/https://restcountries.eu/data/${countries.alpha3Code.toLowerCase()}.svg`}
        alt=""
      />
      <h1>{countries.name}</h1>
      {countries.alpha3Code.toLowerCase()}
      <hr />
      <h4>Capital {countries.capital}</h4>
      <h4>Area {countries.area}</h4>
    </div>
  );
}
