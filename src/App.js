import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';
// import countriesFromJson from './countries.json'
import axios from 'axios'

import { useState, useEffect } from 'react'


function App() {

  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        setCountries(response.data)
      })
  }, [])


  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
          <Routes>
            <Route path='/:country' element={<CountryDetails />} />
          </Routes>


        </div>
      </div>

    </div>
  );
}

export default App;
