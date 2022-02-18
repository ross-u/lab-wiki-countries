import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import React, { useState, useEffect } from 'react';
import countriesArr from './countries.json';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [countries, setCountries] = useState(countriesArr);
  return (
    <>
      <Router>
        <Navbar />
        <div class="container d-flex justify-content-around">
          <div>
            <CountriesList countries={countries} /> 
          </div>
          <div>
            <Switch>
              <Route
                path="/country"
                render={(props) => {
                  return (
                    <>
                      <Route
                        exact
                        path={`${props.match.url}/:alpha3Code`}
                        component={CountryDetails}
                      />
                    </>
                  );
                }}
              />
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
