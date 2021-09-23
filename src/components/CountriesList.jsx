import { Link } from 'react-router-dom';

export default function CountriesList(props) {
  const countries = props.countries;

  return (
    <div class="col-5" style={{ maxheight: '90vh', overflow: 'scroll' }}>
      <ul class="list-group">
        {countries.map((country) => (
          <li class="list-group-item list-group-item-action" href="/ABW">
            <Link to={`/${country.alpha3Code}`}>
              <img
                src={`https://www.countryflags.io/${country.alpha2Code}/flat/32.png`}
                alt={`${country.name}'s flag, yo!`}
              />
              <h2>{country.name}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
