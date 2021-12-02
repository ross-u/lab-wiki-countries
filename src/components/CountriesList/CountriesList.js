import { Link } from 'react-router-dom';

const CountriesList = (props) => {
  const { countries } = props;

  return (
    <div className="col-5" style={{"max-height": "90vh", "overflow-y" : "scroll"}}>
      <div className="list-group">
        {countries.map((country) => {
          return (
            <Link
              className="list-group-item list-group-item-action"
              to={`/${country.alpha3Code}`}
            >
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt={`Flag of ${country.name.common}`}
              />
              <p>{country.name.common}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CountriesList;
