import { Routes, Route } from 'react-router-dom'

import "./App.css"
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'

function App() {

  return (
    <>
      <Navbar />
      <div className='container'>
        <div className='row'>
          <CountriesList />
          <Routes>
            <Route path='/:id' element={<CountryDetails />} />
          </Routes>
        </div>
      </div>
    </>
  )
}
export default App
