import { Link } from 'react-router-dom';

const CountriesList = (props) => {
  const { countries } = props;

  return (
    <div className="col-5">
      <div className="list-group">
        {countries.map((countrie) => {
          return (
            <Link
              className="list-group-item list-group-item-action"
              to={`/${countrie.alpha3Code}`}
            >
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${countrie.alpha2Code.toLowerCase()}.png`}
                alt={`Flag of ${countrie.name.common}`}
              />
              <p>{countrie.name.common}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CountriesList;
