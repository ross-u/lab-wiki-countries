import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import countriesJSON from './countries.json';
import CountryDetails from './components/CountryDetails';

function App() {
  const [countries, setCountries] = useState(countriesJSON);

  // console.log(countriesJSON);

  /* BONUS
  useEffect(() => {
    const getResponse = async () => {
      const res = await axios.get(
        `http://api.countrylayer.com/v2/all?access_key=${process.env.REACT_APP_API_KEY_COUNTRY}`
      );
      //console.log(res);

      const arrCountries = res.data;
      setCountries(arrCountries);
    };

    getResponse();
  }, []);
  */

  return (
    <div className="App">
      <Router>
        <Navbar />

        {/* Contenido dinamico */}

        <CountriesList countries={countries} />
        <Switch>
          <Route
            path="/country"
            render={(props) => {
              return (
                <>
                  <Route
                    exact
                    path={`${props.match.url}/:cca3`}
                    component={CountryDetails}
                  />
                </>
              );
            }}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
