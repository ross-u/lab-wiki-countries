// src/App.js
import './App.css';
import Navbar from './components/Navbar.js';
import CountriesList from './components/CountriesList.js';
import CountryDetails from './components/CountryDetails.js';
import countriesData from './countries.json';
import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

function App() {
  const [countriesData, setCountries] = useState([]);

  useEffect(() => {
    setCountries(CountriesList);
  }, []);
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countries={countriesData} />
          <Switch>
            <Route
              path="/:countryId"
              render={(props) => (
                <CountryDetails {...props} countries={countriesData} />
              )}
            />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
