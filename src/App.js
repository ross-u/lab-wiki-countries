import "./App.css";
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import { Route } from 'react-router-dom';
import allCountries from './countries.json'
import { useState, useEffect } from 'react';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setCountries(allCountries)
  }, [])

  return (
  <div className="App">
    <Navbar />
    <div className="container">
      <div className="row">
        <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
          <CountriesList countries ={countries}/>
        </div>
        <div className="col-7">
          <Route exact path="/:alpha3Code" render={(props) => <CountryDetails {...props} countries={countries}/> } />
      </div>
      </div>
    </div>
  </div>
  );
}
export default App;
