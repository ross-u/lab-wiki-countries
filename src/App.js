import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from "axios"

import './App.css';

function App() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios.get('https://ih-countries-api.herokuapp.com/countries')
    .then((response) => {
      console.log(response.data)
      setCountries(response.data)
    })
  }, [])

  return (
    <div className="app">
      <Navbar />
      <div className='container mt-5'>
        <div className="row">
          <div className="col-md-4">
            <CountriesList countries={countries} />
          </div>
          <div className="col-md-8">
            <Routes>
              <Route
                path="/:id"
                element={<CountryDetails countries={countries} />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
