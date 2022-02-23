import './App.css';
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
import countries from './countries.json'
import CountryDetails from './components/CountryDetails'

import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'


function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setCountries(countries)
  }, [countries])

  return (
    <>
      <div class="container">
        <div class="row">
          <Navbar />
          <CountriesList props={countries} />
          <Routes>
            <Route path='/:id' element={<CountryDetails props={countries} />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App;