import { useState, useEffect } from "react";

function CountriesList (props) {
  const [countries, setCountries] = useState([]);
  console.log(countries)
  useEffect(() => {
    setCountries(props.countries);
  }, [props.countries]);


  return (
    <div>
      <h1>Countries</h1>
      <div className="col-5">
      {countries.map((country) => {
        console.log(country)
        return (
            <div key={country.alpha3Code} className="country list-group">
            <a class="list-group-item list-group-item-action" href="/{country.alpha3Code}">
                <img src={`https://www.countryflags.io/${country.alpha2Code}/flat/32.png`} alt={country.name} />
                <p>{country.name}</p>
            </a>
          </div>
        );
      })}
      </div>
    </div>
  );
}

export default CountriesList;
