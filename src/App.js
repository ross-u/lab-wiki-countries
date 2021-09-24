import { Switch, Route } from 'react-router';
import { Navbar } from './components/Navbar';
import { CountriesList } from './components/CountriesList';
import { CountryDetails } from './components/CountryDetails';
import countriesData from '.././src/countries.json';
import { useState, useEffect } from 'react';

import './App.css';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setCountries(countriesData);
  }, []);

  return (
    <div className="App">
      <Navbar color="primary" variant="dark" href="/" title="WikiCountries" />
      <div className="container">
        <div className="row">
          <div className="col-5">
            <CountriesList countries={countries} />
          </div>
          <div className="col-7">
            <Switch>
              <Route
                render={(countriesProps) => (
                  <CountryDetails {...countriesProps} countries={countries} />
                )}
              />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
