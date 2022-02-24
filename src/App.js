import './App.css'
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
import CountryDetailes from './components/CountryDetails'

import Api from './countries.json'

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <CountriesList />
      <Routes>
        <Route path="/:alpha3Code" element={<CountryDetailes country={Api} />} />
      </Routes>
    </>
  )
}
export default App
