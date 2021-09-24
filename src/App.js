import React, { useState } from 'react';
import "./App.css";
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList"
import CountryDetails from './components/CountryDetails';
import { Route, Switch } from 'react-router-dom';
import allCountries from './countries.json'

function App() {
  const [countries, setCountries] = useState(allCountries)
  return (
    <div className="App">
    <Navbar />
    <div className="columns">
    <div className="leftColumn">
    <CountriesList countries={countries}/>
    </div>
    <div className="rightColumn">
    <Switch>
    {/* <Route exact path="/:id" component={CountryDetails} /> */}
    <Route
          exact path="/:id"
          render={(props) => {
            return <CountryDetails countries={countries} {...props} />;
          }}
        />
    </Switch>
    </div>
    </div>
    </div>
    )
  }
  export default App;
  