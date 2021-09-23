import "./App.css";
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import { useState } from 'react';
import { Route } from 'react-router-dom';
import allCountries from './countries.json'

function App() {
  return (
  <div className="App">
    <Navbar />
    <CountriesList countries ={countries}/>
    <Route exact path="/:alpha3Code" render={(props) => <CountryDetails {...props} countries={allCountries}/> } />
  </div>
  );
}
export default App;
