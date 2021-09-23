import './App.css';
import React from 'react';
import Home from './componants/Home';
import Navbar from './componants/Navbar';
import CountriesList from './componants/CountriesList';
import { useState, useEffect } from 'react';
import countriesArr from './countries.json'

import { Route, Switch } from 'react-router-dom';
import CountryDetails from './componants/CountryDetails';

function App() {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setCountries(countriesArr)
  }, [])

  return (
    <div className="App">
    <Navbar />
    <div className="container">
      <div className="row">
        <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
          <CountriesList countries={countries}/>
        </div>
        <div className="col-7">
          <Route exact path="/:alpha3Code" render={(props) => <CountryDetails {...props} countries={countries}/> } />
          <Route exact path="/" component={Home} />
      </div>
      </div>
    </div>
    </div>
  );
}

export default App;
