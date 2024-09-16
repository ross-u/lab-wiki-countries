
import './App.css';
import Navbar from './components/Navbar';
import countries from "./countries.json"
import {useState, useEffect} from 'react';
import CountriesList from './components/CountriesList';
import { Switch, Route} from "react-router-dom";
import CountryDetails from './components/CountryDetails';


function App() {

  //useState for the countries data
  const [ countriesData, setCountriesData] = useState([])

  useEffect(() => {
    setCountriesData(countries)
    console.log("mounting")
    return () => {

    }
  }, [])

  return (
    <div className="App">
      <Navbar/>
        <Switch>
          <Route 
          path='/:countryAlpha3Code'
          render={(routeProps) => <CountryDetails {...routeProps} countriesData={countriesData} /> } 
          />
          <Route
          exact path="/"
          render={(routeProps) => <CountriesList {...routeProps} countriesData={countriesData} /> } 
          />
          {/* <CountriesList countriesData={countriesData} /> */}
      </Switch>
    </div>
  );
}

export default App;