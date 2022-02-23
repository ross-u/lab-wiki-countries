import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import CountriesList from "./components/CountriesList/CountriesList";
import CountryDetails from "./components/CountryDetails/CountryDetails";
import Navbar from "./components/Navbar/Navbar";
//import countries from '../src/countries.json'
import { useEffect, useState } from "react";
import axios from 'axios';

function App() {

  const [theCountries, setTheCountries] = useState([]);

  // useEffect(() => {
  //   setTheCountries(theCountries)
  // }, [])

  useEffect(() => {        
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        setTheCountries(response.data);
      })
  }, [])


  return (
    <div className="App">
      <Navbar />

      <CountriesList countries={theCountries} />

      <Routes>
        <Route path='/detalles/:country_id' element={<CountryDetails countries={theCountries} />} />
      </Routes>

    </div>
  )
}

export default App;
