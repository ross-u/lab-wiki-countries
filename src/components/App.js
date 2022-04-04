import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './NavBar';
import CountriesList from './CountriesList';
import CountryDetails from './CountryDetails';

function App() {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchCountries() {
      try {
        setLoading(true);
        const response = await axios.get(
          'https://ih-countries-api.herokuapp.com/countries'
        );

        setState([...response.data]);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
    fetchCountries();
  }, []);

  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="row">
          {loading ? (
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            <CountriesList countries={state} />
          )}

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
