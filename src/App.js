import  countries  from "./countries.json";
import './App.css';
import Navbar from "./components/Navbar" 
import CountriesList from "./components/CountriesList"
import CountryDetails from "./components/CountryDetails"
import {Route, Routes} from "react-router-dom";
import { useState } from "react";



function App() {

  const [myCountries , setMyCountries ] = useState(countries)

  return (
    <div className="App">

     <Navbar />

      <Routes>

        <Route path="/" element={<CountriesList countries={myCountries} />}/>
        <Route path="/:alpha3Code" element={<CountryDetails countries={myCountries}/>}/>
      </Routes>

    </div>
  );
}

export default App;
