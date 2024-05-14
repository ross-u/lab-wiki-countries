import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
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

          borders.push(border);
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
              <img
                src={`https://www.countryflags.io/${matchedCountry.alpha2Code}/shiny/64.png`}
                alt={`${matchedCountry.name} flag`}
                className="main-flag"
              />
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
              <h4 className="pb-3">Borders:</h4>
              {matchedCountryBorders &&
                matchedCountryBorders.map((border) => (
                  <Link key={border.alpha3Code} to={`/${border.alpha2Code}`}>
                    <p>{border.name}</p>
                  </Link>
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
