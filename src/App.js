import './App.css';

import Navbar from './components/Navbar/Navbar';
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';

import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

import axios from 'axios';

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
            <Route path="/:country_id" element={<CountryDetails countries={countries} />}></Route>
          </Routes>

        </div>
      </div>

    </div>
  )
}

export default App;