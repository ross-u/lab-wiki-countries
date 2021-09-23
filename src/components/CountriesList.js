import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function CountriesList(props) {
/*   const [countries, setCountries] = useState([]);

  useEffect(() => {
    setCountries(props.countries);
  }, []); */

  let countries = props.countries;

  return countries.map((country) => (
    <>
	<div className="col-5">
    <div class="list-group">
      <Link key={country.name} to={`/countries/${country.alpha3Code}`}>
		<img
			src={`https://www.countryflags.io/${country.alpha2Code}/flat/32.png`}
			alt="flag of the state"
		/>
		<p>{country.name}</p>
      </Link>
      <br />
	</div>
	</div>
    </>
  ));
}

export default CountriesList;

//en detalles me va a pedir la bandera grande --> checkar link de aitor
