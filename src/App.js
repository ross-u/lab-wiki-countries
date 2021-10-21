import './App.css';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import countriesData from './countries.json';
import CountryDetails from './components/CountryDetails';
import { Switch, Route } from 'react-router-dom';
import { useState, useEffect } from "react";

//hay que termianrlo
function App() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    setCountries(countriesData);
    
}, []);
  return (
    <div className="App">
      <Navbar />
      <div className= "container">
      <div className="row">
        <div className="col-6">
          <CountriesList countries={countries} />
          </div>
          <div className="col-6">
          <Switch>
            <Route
              path="/details/:alpha3Code"
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
