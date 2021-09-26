import './App.css';
import Navbar from './components/Navbar';
import countries from './countries.json';
import React, { useState, useEffect } from 'react';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Route } from 'react-router-dom';

function App(props) {
  // countries from JSON
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    setCountryData(countries)
  }, [])

  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">
          <CountriesList countryData={countryData} />
          <Route
            path="/:alpha3code"
            render={(props) => (
              <CountryDetails {...props} countries={countries} />
            )}
          />
        </div>
      </div>
    </div>
  );
}
export default App;
