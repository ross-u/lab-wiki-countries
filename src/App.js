
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CountriesList from "./components/CountriesList/CountriesList";
import CountryDetails from "./components/CountryDetails/CountryDetails";
import Navbar from "./components/Navbar/Navbar";
import countries from './countries.json'
import axios from 'axios'

function App() {

  const [theCountries, setTheCountries] = useState([])

  // useEffect(() => {
  //   setTheCountries(theCountries)
  // }, [])

  useEffect(() => {

    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then(response => {
        setTheCountries(response.data)
      })
  }, [])

  return (

    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">
          <CountriesList theCountries={countries} />
          {/* React-Router Route rendering the CountryDetails should go here */}

          <Routes>
            <Route path='/listado/:id' element={<CountryDetails theCountries={countries} />} />

          </Routes>
        </div>
      </div>
    </div>
  )
}
export default App;

