import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

export default function CountriesList(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <img
          src={`https://www.countryflags.io/${props.country.alpha2Code}/shiny/64.png`}
          alt={props.country.name}
        ></img>
        <br />
        <Link
          to={`/countryDetails/${props.country.alpha3Code}`}
          className="linkStyle"
        >
          {props.country.name}
        </Link>
      </Card.Body>
    </Card>
  );
}
