import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import countriesListJson from '../../countries.json';
import ListGroup from 'react-bootstrap/ListGroup';
import './CountryDetails.css';

function CountryDetails() {
  const [matchedCountry, setMatchedCountry] = useState(null);
  const [matchedCountryBorders, setMatchedCountryBorders] = useState(null);
  const { iso2 } = useParams();

  useEffect(() => {
    axios
      .get(`https://api.countrystatecity.in/v1/countries/${iso2}`, {
        headers: {
          'X-CSCAPI-KEY':
            'Rno1S0dYbHBEZFVwNlRVSzJZQ0ZHNG83U1RnYXIyWE9UVGNGVUFYcQ==', // put in env, but for now is okayish since it's free
        },
      })
      .then((response) => {
        //Here goes my fix, since the original API no longer works, and since I wanted to use external api calls
        //but the api I got does not have the sufficient data let's complicate our existence and why not... do this mess
        //Next time please provide a functional external API without CORS issues
        const country = countriesListJson.find(
          (countryObj) => countryObj.alpha2Code === response.data.iso2
        );

        const borders = [];
        country.borders.forEach((alpha3code) => {
          const border = countriesListJson.find((country) => {
            return country.alpha3Code === alpha3code;
          });
          borders.push(border.name);
        });

        setMatchedCountryBorders(borders);
        setMatchedCountry(country);
      })
      .catch((error) => {
        console.error('There was an error!', error);
      });
  }, [iso2]);

  return (
    <>
      {!matchedCountry && <h3>Country not found!</h3>}
      {matchedCountry && (
        <div>
          <ListGroup>
            <ListGroup.Item>
              <h1>{matchedCountry.name}</h1>
            </ListGroup.Item>
            <ListGroup.Item>
              <h4 className="pb-3">Capital</h4> {matchedCountry.capital}
            </ListGroup.Item>
            <ListGroup.Item>
              <h4 className="pb-3">Area</h4> {matchedCountry.area}{' '}
              <span>km2</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <h4 className="pb-3">Population</h4>
              {(matchedCountry.population / 1000000).toFixed(2)}
              <span> Millions</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <h4 className="pb-3">Currency</h4>
              {matchedCountry.currencies[0].name} (
              {matchedCountry.currencies[0].symbol})
            </ListGroup.Item>
            <ListGroup.Item>
              <h4 className="pb-3">Borders:</h4>
              {matchedCountryBorders &&
                matchedCountryBorders.map((border) => (
                  <p key={border}>{border}</p>
                ))}

              {!matchedCountryBorders.length && <p>No borders</p>}
            </ListGroup.Item>
          </ListGroup>
        </div>
      )}
    </>
  );
}

export default CountryDetails;
