import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import countriesList from './countries.json';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setCountries(countriesList);
  }, []);


  return (
    <div className="App">
      <Navbar />
      <div class="container">
        <div class="row">
        <CountriesList countries={countries} />
        </div>
        <div class="col-7">
        <Switch>
          <Route
            path="/countries/:country"
            render={(props) => <CountryDetails {...props} />}
          />
        </Switch>
        </div>
      </div>
    </div>
  );
}
export default App;
