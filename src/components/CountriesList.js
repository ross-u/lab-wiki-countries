
import {Card} from 'react-bootstrap';
import { Link } from "react-router-dom";

function CountryList(props) {
        console.log(props)

  return (
           props.countries.map((everyCountry) => (

<Link to={`/projects/${everyCountry.alpha3Code}`}>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={`https://www.countryflags.io/${everyCountry.alpha2Code}/flat/32.png`} />
  <Card.Body>
    <Card.Title>{everyCountry.name}</Card.Title> 
  </Card.Body>
</Card>
</Link>

  ))
  )
}
export default CountryList;
