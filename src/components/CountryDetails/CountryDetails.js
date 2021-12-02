import { useParams, Link } from 'react-router-dom';

const CountryDetails = (props) => {

  const { countries } = props;
  const params = useParams();
  const country = countries.find((countryFromJson) => { 
    return countryFromJson.alpha3Code === params.id;
  });
  
  return (
    <div className="col-7">
      <img
        src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
        alt="country flag"
        style={{ width: '100px' }}
      />
      <h1>{country.name.common}</h1>
      <table class="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: 0.3 }}>Capital</td>
            <td>{country.capital[0]}</td>
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
                    <Link
                      className="list-group-item list-group-item-action"
                      to={`/${border}`}
                    >
                      <p>{border}</p>
                    </Link>
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
