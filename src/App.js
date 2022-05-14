import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { useState, useEffect } from 'react';
import ContryDetails from './components/ContryDetails';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import axios from 'axios';

function App() {
  const [countries, setCountries] = useState([]);

  const getCountries = async () => {
    const { data } = await axios.get(
      'https://ih-countries-api.herokuapp.com/countries'
    );
    setCountries(() => data);
  };

  useEffect(() => {
    try {
      getCountries();
    } catch (error) {
      console.error(error);
    }
  }, []);
  return (
    <div className="App">
      <Navbar />
      <CountriesList countries={countries} />
      <Routes>
        <Route
          path="/:countryId"
          element={<ContryDetails countries={countries} />}
        />
      </Routes>
    </div>
  );
}

export default App;
