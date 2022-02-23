import './App.css'
import Navbar from './components/Navbar/Navbar'
import countries from './countries.json'
import { Route, Routes } from 'react-router-dom'
import CountriesList from './components/CountriesList/CountriesList'
import CountryDetails from './components/CountryDetails/CountryDetails'
import { useState } from 'react'



function App() {

  
  return (
    <div className="App ">
      <Navbar />
      <div className="container" >
        <div className='row'>

          <CountriesList theCountries={countries} />
          <Routes>
            <Route path=':alpha3Code' element={<CountryDetails theCountries={countries} />} />
          </Routes>
        </div>

      </div>
    </div>
  )
}

export default App
