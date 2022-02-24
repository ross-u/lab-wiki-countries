import "./App.css";
import Navbar from "./components/Navbar/Navbar"
import CountriesList from "./components/CountriesList/CountriesList"
import countriesJson from './countries.json'
import { useState, useEffect } from "react";
import CountriesDetails from './components/CountryDetails/CountryDetails'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    setCountries(countriesJson)
  }, [])


  return <div className="App">

    <Navbar />
    <CountriesList countries={countriesJson} />
    <Routes>
      <Route path='/countrydetails/:alpha3Code' element={<CountriesDetails />} />
    </Routes>



  </div>;
}
export default App;
