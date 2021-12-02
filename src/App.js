import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';
import Navbar from './components/Navbar/Navbar';
import countriesFromJSON from './countries.json'

function App() {
 
  const [countries, setCountries] = useState(countriesFromJSON)

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countries={countries}/>
          <Switch>
            <Route exact path="/:id" render={() => <CountryDetails countries={countries}/>} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
