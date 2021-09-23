import './App.css';
import React from 'react';
import Home from './componants/Home';
import Navbar from './componants/Navbar';
import CountriesList from './componants/CountriesList';
import { useState, useEffect } from 'react';


import { Route, Switch } from 'react-router-dom';
import CountryDetails from './componants/CountryDetails';


function NotFound() {
  return <h1>404 - Not Found - 🙀</h1>
}

function App() {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setCountries(CountriesList)
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/countries" component={CountriesList} />
        <Route exact path="/:alpha3Code" render={(props) => <CountryDetails {...props} countries={countries}/> } />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
