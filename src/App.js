import './App.css';
import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';
import countriesListJson from './countries.json';
import { Col, Row, Container } from 'react-bootstrap';

function App() {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    setCountriesData(countriesListJson);
  }, []);

  //Gives CORS error
  // useEffect(() => {
  //   axios
  //     .get(
  //       'https://web.archive.org/web/20210723151325/https://restcountries.eu/rest/v2/all'
  //     )
  //     .then((response) => setCountriesData(response.data))
  //     .catch((error) => {
  //       console.error('There was an error!', error);
  //     });
  // }, []);

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
                  path="/:alpha3Code"
                  render={(routeProps) => {
                    return (
                      <CountryDetails
                        {...routeProps}
                        countriesData={countriesData}
                      />
                    );
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
