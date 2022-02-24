import './App.css';
import Navbar from './components/Navbar/Navbar'
import CountriesList from './components/CountriesList/CountriesList'
import CountryDetails from './components/CountryDetails/CountryDetails'
import countries from './countries.json'
import { useState, useEffect } from 'react'

import { Routes, Route } from 'react-router-dom'

function App() {

  const [theCountries, setTheCountries] = useState([])

  useEffect(() => {
    setTheCountries(theCountries)
  }, [])

  return (
    <div className="App">
      <Navbar />
      <main className="row">
        <div className="col-4">
          <CountriesList countries={countries} />
        </div>
        <div className="col-4">

          <Routes>

            <Route path='/details/:id' element={<CountryDetails countries={countries} />} />

          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
