import { Link } from 'react-router-dom';
import './CountriesList.css';
import ListGroup from 'react-bootstrap/ListGroup';

function CountriesList({ countriesData }) {
  return (
    <ListGroup>
      {countriesData.map((country) => (
        <ListGroup.Item key={country.alpha3Code}>
          <Link to={`/${country.alpha3Code}`}>
            <img
              src={`https://www.countryflags.io/${country.alpha2Code}/flat/32.png`}
              alt={`${country.name} flag`}
            />
            <p>{country.name}</p>
          </Link>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default CountriesList;
