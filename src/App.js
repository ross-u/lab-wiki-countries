import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import countriesJson from './countries.json';

import Navbar from './components/CountryDetails';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  const [state, setState] = useState([...countriesJson]);

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countries={state} />

          <Routes>
            <Route
              path="/:alpha3Code"
              element={<CountryDetails countries={state} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
