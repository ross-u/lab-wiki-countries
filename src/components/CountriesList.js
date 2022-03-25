import { Link } from 'react-router-dom';

function CountriesList(props) {
  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group">
        {props.countries.map((currentCountryObj) => {
          const { alpha3Code, alpha2Code, name } = currentCountryObj;

          return (
            <Link
              className="list-group-item list-group-item-action text-center"
              to={`/${alpha3Code}`}
              key={alpha3Code}
            >
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${alpha2Code.toLowerCase()}.png`}
                alt={`Flag of ${name.common}`}
              />
              <p>{name.common}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default CountriesList;
