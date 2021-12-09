
import './App.css';
import { Switch, Route } from "react-router-dom";
import NavBar from './components/Navbar/NavBar';
import CountriesList from './components/CountriesList/CountriesList';
import CountriesData from './countries.json'
import CountryDetails from './components/CountryDetails/CountryDetails';
import { useEffect, useState } from 'react';




function App() {
 
  const [countriesData, setCountries] = useState(CountriesData)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setCountries(countriesData)
    setLoaded(true)
  }, [])
  
  return (
    loaded && <div className="App">
      <NavBar />
      <div className="container">
        <div className="row">
          <CountriesList countries={countriesData}/>
          <Switch>
            <Route exact path="/:a3c" render={() => <CountryDetails countries={countriesData} /> } />
          </Switch>
        </div> 
      </div>     
    </div>
  );
}

export default App;
