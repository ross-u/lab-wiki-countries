import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import countriesJson from '../countries.json';

import Navbar from './Navbar';
import CountriesList from './CountriesList';
import CountryDetails from './CountryDetails';

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
