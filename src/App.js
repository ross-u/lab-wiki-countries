import './App.css';
import Navbar from './components/Navbar';
import CountriesData from './countries.json';
import { Link, Route, Switch } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import { useState } from 'react';
import CountryDetails from './components/CountryDetails';

function App() {
  const [countries, setCountries] = useState(CountriesData);
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-6">
            {countries.map((country) => {
              return <CountriesList country={country} />;
            })}
          </div>
          <div className="col-6">
            <Switch>
              <Route
                path="/countryDetails/:id"
                render={(props) => <CountryDetails {...props} />}
              />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
