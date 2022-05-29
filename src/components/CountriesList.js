import { Link } from 'react-router-dom';
const style = {
  maxHeight: '90vh',
  overflow: 'scroll',
};

function CountriesList(props) {
  const { data } = props;

  function countryLink(countries) {
    return data.map((country) => {
      const lowerCase = country.alpha2Code.toLowerCase();
      const url = `https://flagpedia.net/data/flags/icon/72x54/${lowerCase}.png`;
      const link = `/${country.alpha3Code}`;
      return (
        <Link
          to={link}
          key={country.alpha3Code}
          className="list-group-item list-group-item-action"
        >
          <img src={url} alt={country.name.common} />
          <p>{country.name.common}</p>
        </Link>
      );
    });
  }

  return (
    <div className="col-5">
      <div className="list-group" style={style}>
        {countryLink(data)}
      </div>
    </div>
  );
}

export default CountriesList;
