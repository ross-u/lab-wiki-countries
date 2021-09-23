import { Switch, Route } from 'react-router';
import './App.css';
import CountryList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
import Countries from './countries.json';
import { useState, useEffect } from 'react';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setCountries(Countries);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-6">
            <CountryList countries={countries} />
          </div>
          <div className="col-6">
            <Switch>
              <Route
                path="/:id"
                render={(props) => (
                  <CountryDetails {...props} countries={countries} />
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
