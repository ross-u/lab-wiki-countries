import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function CountryDetails(props) {
  const [country, setCountry] = useState({
    name: '',
    capital: [],
    area: 0,
    borders: [],
    alpha2Code: '',
  });

  //console.log("params", useParams())
  const { alpha3Code } = useParams();

  useEffect(() => {
    //getInfoFromJson()
    axios
      .get('https://ih-countries-api.herokuapp.com/countries/' + alpha3Code)
      .then((data) => {
        const { name, capital, area, borders, alpha2Code } = data.data;
        setCountry({
          name: name.common,
          capital: capital,
          area: area,
          borders: borders,
          alpha2Code: alpha2Code.toLowerCase(),
        });
      })
      .catch((err) => console.log('Error geting data from API'));
  }, []);

  useEffect(() => {
    //getInfoFromJson()
    axios
      .get('https://ih-countries-api.herokuapp.com/countries/' + alpha3Code)
      .then((data) => {
        const { name, capital, area, borders, alpha2Code } = data.data;
        setCountry({
          name: name.common,
          capital: capital,
          area: area,
          borders: borders,
          alpha2Code: alpha2Code.toLowerCase(),
        });
      })
      .catch((err) => console.log('Error geting data from API'));
  }, [alpha3Code]);

  const getInfoFromJson = () => {
    const country = props.countries.find(
      (country) => alpha3Code === country.alpha3Code
    );

    if (country) {
      const { name, capital, area, borders, alpha2Code } = country;
      setCountry({
        name: name.common,
        capital: capital,
        area: area,
        borders: borders,
        alpha2Code: alpha2Code.toLowerCase(),
      });
    }
  };

  const getCountry = (alpha3Code) => {
    const lookForCountry = props.countries.find(
      (country) => alpha3Code === country.alpha3Code
    );

    if (lookForCountry) {
      return lookForCountry.name.common;
    }
    /*    axios.get(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`)
        .then((lookForCountry)=>{
          console.log(lookForCountry.data.name.common)
          return lookForCountry.data.name.common
        })
        .catch((err)=>console.log("Error geting data from API", err)) */
  };

  return (
    <div className="col-7">
      <img
        src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code}.png`}
        alt="country flag"
        style={{ width: '300px' }}
      />
      <h1>{country.name}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{country.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country.area} km <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {/* {console.log("borders",country)} */}
                {country.borders.map((border, idx) => (
                  <li key={idx}>
                    <Link to={`/${border}`}>{getCountry(border)}</Link>
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
