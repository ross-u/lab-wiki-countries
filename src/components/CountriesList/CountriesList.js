import { Link } from 'react-router-dom';
import './CountriesList.css';
import ListGroup from 'react-bootstrap/ListGroup';

function CountriesList({ countriesData }) {
  return (
    <ListGroup>
      {countriesData.map((country) => (
        <ListGroup.Item key={country.iso2}>
          <Link to={`/${country.iso2}`}>
            <img
              src={`https://www.countryflags.io/${country.iso2}/flat/32.png`}
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
