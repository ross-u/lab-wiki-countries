import { Route, Routes } from 'react-router-dom';
import './App.css';
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';
import Navbar from './components/Navbar/Navbar';
import axios from "axios"
import { useEffect, useState } from 'react';
// import API from './countries.json'


function App() {

  const [disCountry, setDisCountry] = useState([])

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then(response => setDisCountry(response.data))
  }, [disCountry])

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-5">
            <div className="list-group">
              < CountriesList countries={disCountry} />
            </div>
          </div>
          <div className="col-7">
            <Routes>
              <Route path="/:countryCode" element={<CountryDetails countries={disCountry} />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
