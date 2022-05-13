import './App.css';
import NavBar from './components/NavBar';
import countriesJson from "./countries.json"
import {useState, useEffect} from "react"
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import axios from "axios";

import { Routes, Route } from "react-router-dom";

function App() {

  const [countries, setCountries] = useState([])

  useEffect(()=>{
    //setCountries(countriesJson)

    // Iteration 4
    axios.get("https://ih-countries-api.herokuapp.com/countries")
    .then((data)=>{
      //console.log(data.data)
      setCountries(data.data)})
    .catch((err)=>console.log("Error geting data from API"))
},[])

  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
          {/* React-Router Route rendering the CountryDetails should go here */}
          <Routes>
            <Route path="/:alpha3Code" element={<CountryDetails countries={countries} />} />

          </Routes>
        </div>
      </div>

    </div>
  );
}

export default App;
