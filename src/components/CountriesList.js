import { Link } from 'react-router-dom';

function CountriesList(props) {
  const countries = props.countryData;
  // console.log(countries);
  return (
    <div>
      {countries.map((country) => {
        return (
          <ul>
            <Link to={`/${country.alpha3Code}`}>
              <p>{country.name}</p>
            </Link>
          </ul>
        );
      })}
    </div>
  );
}

export default CountriesList;
