import "./App.css";
import Navbar from "./components/Navbar";
import countries from "./countries.json";
import React, {useState} from 'react';
import CountriesList from "./components/CountriesList"
import CountryDetails from "./components/CountryDetails";
import { Route } from "react-router-dom";

function App(props) {
  // countries from JSON
	const [ countryData, setCountryData ] = useState(countries);
  
  return <div className="App">

    <Navbar />

    <div className="container">
    <div className="row" id="row">

    <CountriesList countryData={countryData}/>
    <Route path="/:alpha3code" render={(props) =><CountryDetails {...props} countries={countries} /> } />
    
     </div>
    </div>
  </div>;
}
export default App;