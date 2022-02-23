

import { Routes, Route } from "react-router-dom"
import "./App.css"
import CountriesList from "./components/CountriesList/CountiresList"
import CountryDetails from "./components/CountryDetails/CountryDetails"


import Navbar from "./components/Navbar/Navbar"



function App() {


  return (
    <div className="App">
      <Navbar />

      <div className="row">
        <div className="col-7">
          <Routes >
            <Route path="/:country_aplha" element={<CountryDetails />} />
          </Routes >
        </div>
      </div>
      <div className="container">

        <div className="row">
          <CountriesList />
        </div>

      </div>

    </div>
  )
}
export default App


