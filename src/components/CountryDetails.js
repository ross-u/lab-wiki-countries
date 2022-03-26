import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

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
    async function fetchCountry() {
      try {
        const response = await axios.get(
          `https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`
        );

        const { name, capital, area, borders, alpha2Code } = response.data;

        setState({
          name: name.common,
          capital: capital,
          area: area,
          borders: borders,
          alpha2Code: alpha2Code,
        });
      } catch (err) {
        console.log(err);
      }
    }
    fetchCountry();
  }, [alpha3Code]);

  function getBorderName(code) {
    const foundCountry = props.countries.find(
      (currentCountryObj) => currentCountryObj.alpha3Code === code
    );

    if (foundCountry) {
      return foundCountry.name.common;
    }

    return 'Border name not found';
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
                {state.borders.map((currentBorderCode) => (
                  <li key={currentBorderCode}>
                    <Link to={`/${currentBorderCode}`}>
                      {getBorderName(currentBorderCode)}
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
