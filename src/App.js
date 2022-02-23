import './App.css';
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'
import countries from './countries.json'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'


function App() {
  return (
    < div className = "App" >
      <Navbar/>
      <div className="container">
        {/* <CountriesList countries={countries} /> */}

        <Routes>
          <Route path='/' element={<CountriesList countries={countries} />}/>
          <Route path='/details/:country_id' element={<CountryDetails countries={ countries }/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App;
