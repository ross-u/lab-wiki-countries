import { Route, Switch } from 'react-router';
import './App.css';
import Navbar from './components/Navbar';
import countriesData from './countries.json';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { useState, useEffect } from 'react';

function App() {
  const [countries, setCountries] = useState();

  useEffect(() => {
    setCountries(countriesData);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countries={countriesData} />

          <Switch>
            <Route
              exact
              path="/:countryAlpha3Code"
              render={(routeProps) => {
                return (
                  <CountryDetails {...routeProps} countries={countriesData} />
                );
              }}
            />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
