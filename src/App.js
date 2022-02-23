import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar.js'
import CountriesList from './components/CountriesList/CountriesList.js'
import CountryDetails from "./components/CountryDetails/CountryDetails.js"

import countries from "./countries.json"

import {Routes, Route} from "react-router-dom"




function App() {
  return (
    <div className="App">
      
      <Navbar/>

      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
        </div>
      </div>

      <Routes>
        <Route path="/:id" element={<CountryDetails country={countries} />} />
      </Routes>
      
      

      
    </div>
  );
}

export default App;
