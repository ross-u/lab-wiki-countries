import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import data from './countries.json';
import { Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const [countries, setCountries] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setCountries(data);
    setLoaded(true);
  }, []);

  return (
    loaded && (
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="row">
            <CountriesList countries={countries} />
            <Switch>
              <Route
                exact
                path="/country/:a3c"
                render={() => <CountryDetails countries={countries} />}
              />
            </Switch>
          </div>
        </div>
      </div>
    )
  );
}

export default App;
