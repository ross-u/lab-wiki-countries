import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 

function CountriesList (props) {
  const [countries, setCountries] = useState([]);
  console.log(countries)
  useEffect(() => {
    setCountries(props.countries);
  }, [props.countries]);


  return (
    <div>
      <h1>Countries</h1>
      <div>
      {countries.map((country) => {
        console.log(country)
        return (
            <div key={country.alpha3Code} className="country list-group">
                <Link to={`/countries/${country.alpha3Code}`} className="list-group-item list-group-item-action" >
                    <img src={`https://www.countryflags.io/${country.alpha2Code}/flat/32.png`} alt={country.name} />
                    <p>{country.name}</p>
                </Link>
            </div>
        );
      })}
      </div>
    </div>
  );
}

export default CountriesList;
