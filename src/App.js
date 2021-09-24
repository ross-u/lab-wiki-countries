import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';
import { Col, Row, Container } from 'react-bootstrap';

function App() {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.countrystatecity.in/v1/countries', {
        headers: {
          'X-CSCAPI-KEY':
            'Rno1S0dYbHBEZFVwNlRVSzJZQ0ZHNG83U1RnYXIyWE9UVGNGVUFYcQ==', // put in env
        },
      })
      .then((response) => setCountriesData(response.data))
      .catch((error) => {
        console.error('There was an error!', error);
      });
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Container>
        <Row>
          <Col sm={3}>
            <CountriesList countriesData={countriesData} />
          </Col>
          <Switch>
            <>
              <Col sm={9}>
                <Route
                  exact
                  path="/:iso2"
                  render={(routeProps) => {
                    return <CountryDetails {...routeProps} />;
                  }}
                />
              </Col>
            </>
          </Switch>
        </Row>
      </Container>
    </div>
  );
}

export default App;
