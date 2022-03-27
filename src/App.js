import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import countries from './countries.json';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import CountryDetails from './components/CountryDetails';


function App() {
  const [state, setState] = useState([...countries]);


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
