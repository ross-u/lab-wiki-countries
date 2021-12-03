import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const CountryDetails = (props) => {
  const params = useParams();

  const findCountry = () => {
    const arrayOfCountry = props.countries.filter((country) => {
      return country.alpha3Code === params.a3c;
    });
    return arrayOfCountry[0];
  };

  const country = findCountry();

  const style = {
    width: '30%',
  };

  return (
    <div className="col-7">
      <img
        src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
        alt="flag"
      />
      <h1>{country.name.official}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={style}>Capital</td>
            <td>{country.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country.area} <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {country.borders.map((border) => {
                  return (
                    <li className="list-unstyled" key={border + Date.now()}>
                      <Link
                        className="list-group-item list-group-item-action"
                        to={`/country/${border}`}
                      >
                        {border}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetails;
