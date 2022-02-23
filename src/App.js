import './App.css';

import CountriesList from './components/CountriesList';

import countriesList from './countries.json'

import NavBar from './components/Navbar';

import CountryDetails from './components/CountryDetails';

import { Routes, Route } from "react-router-dom";

import { useState, useEffect } from "react";

function App() {
  
  const [countries, setCountries] = useState([]);
 
  useEffect(() => {
    setCountries(countriesList);
  }, [countries]);

  return <div className="App">

  <NavBar></NavBar>
 
 <div className="container">

 <div className="row">

  <Routes>
        {/* <Route  path="/" element={ <HomePage /> } /> */}
 
      
        <Route path="/countries/:id" element={ <CountryDetails /> } />

          <Route path="/" element={ <CountriesList countries={countries}/> } />


        
       
 
      </Routes>
      </div>
 </div>
  </div>
}
export default App;


