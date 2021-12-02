import { Routes, Route } from 'react-router-dom'

import "./App.css"
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<CountriesList />} />
        <Route path='/:id' element={<CountryDetails />} />
      </Routes>
    </>
  )
}
export default App
