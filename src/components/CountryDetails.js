import countries from '../countries.json';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function CountryDetails(props) {
  const [countryList, setCountryList] = useState(countries);

  const foundCountry = countries.find((country) => {
    return country.alpha3Code === props.match.params.id;
  });

  useEffect(() => {
    setCountryList(countries);
  }, [props.countryList]);

  console.log('this is the found country:', foundCountry);

  let bordersArray = foundCountry.borders;

  function Borders(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      let foundBorder = countryList.find(
        (country) => country.alpha3Code === arr[i]
      );
      newArr.push(foundBorder);
    }
    console.log('dentro de funcion:', newArr);
    return newArr;
  }

  let borderList = Borders(bordersArray);
  console.log('fuera de funcion:', borderList);

  return (
    <div>
      {foundCountry && (
        <div className="detailContainer">
          <img
            src={`https://www.countryflags.io/${foundCountry.alpha2Code}/flat/32.png`}
          />
          <h1>{foundCountry.name}</h1>
          <h3>
            <b>Capital:</b>
          </h3>
          <h3>{foundCountry.capital}</h3>
          <h3>
            <b>Population:</b>
          </h3>
          <h3>{foundCountry.population}</h3>
          <h3>
            <b>Borders:</b>
          </h3>
          <ul className="borderList">
            {borderList.map((border) => {
              return (
                <li>
                  <Link to={`/${border.alpha3Code}`}>{border.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default CountryDetails;
