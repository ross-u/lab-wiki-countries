import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function CountryDetails(props) {
  const [state, setState] = useState({
    name: '',
    capital: [],
    area: 0,
    borders: [],
    alpha2Code: '',
  });

  const { alpha3Code } = useParams();

  useEffect(() => {
    const foundCountry = props.countries.find(
      (currentCountryObj) => currentCountryObj.alpha3Code === alpha3Code
    );

    if (foundCountry) {
      const { name, capital, area, borders, alpha2Code } = foundCountry;

      setState({
        name: name.common,
        capital: capital,
        area: area,
        borders: borders,
        alpha2Code: alpha2Code,
      });
    }
  }, [alpha3Code, props.countries]);

  function getBoderName(code) {
    const foundCountry = props.countries.find(
      (currentCountryObj) => currentCountryObj.alpha3Code === code
    );

    if (foundCountry) {
      return foundCountry.name.common;
    }

    return 'Country code not found';
  }

  return (
    <div className="col-7">
      <img
        src={`https://flagcdn.com/h80/${state.alpha2Code.toLowerCase()}.jpg`}
        alt="country flag"
        style={{ width: '300px' }}
      />
      <h1>{state.name}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>
              <ul>
                {state.capital.map((currentCapitalStr) => (
                  <li key={currentCapitalStr}>{currentCapitalStr}</li>
                ))}
              </ul>
            </td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {state.area} km <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {state.borders.map((currentBoderCode) => (
                  <li>
                    <Link to={`/${currentBoderCode}`}>
                      {' '}
                      {getBoderName(currentBoderCode)}
                    </Link>
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;
