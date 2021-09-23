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
      {/* <nav class="navbar navbar-dark bg-primary mb-3"> */}
      {/* <Route exact path="/projects" component={CountriesList}/> */}
      <Route exact path="/:id" component={CountryDetails}/>  
      <CountriesList countryData={countryData} />
      <Route component={NotFound} />
      </Switch>
      <div>
      </div>   
    </div>
  </div>;
}
export default App;
