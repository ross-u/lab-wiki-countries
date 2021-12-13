import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
//components
import Navbar from "./components/Navbar"
import CountriesList from "./components/CountriesList"
import CountryDetails from "./components/CountryDetails"


function App() {


  return (

    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-5" style={{ 'max-height': '90vh', 'overflow': 'scroll' }}>
            <div className="list-group">
              <CountriesList />
            </div>
          </div>
          <div className="col-7">
            <Routes>
              <Route path='/countries/:alpha3code' element={<CountryDetails />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
