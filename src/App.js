import "./App.css";
import {Route} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import countries from './countries.json'
import {useState, useEffect} from 'react';

function NotFound() {
  return <h1>404 - Not Found</h1>
}

function App() {
  const [ countryData, setCountryData ] = useState(countries);

  return <div className="App">
     <div className="App">
      <Navbar />
      <Switch>
      <div class="container">
      <div class="row">
      <Route exact path="/:id" component={CountryDetails}/>  
      <CountriesList countryData={countryData} />
      </div>
      </div>
      <Route component={NotFound} />
      </Switch>
      <div>
      </div>   
    </div>
  </div>;
}
export default App;
