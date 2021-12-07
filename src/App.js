import './App.css';
import Navbar from "./components/Navbar";     
import { CountryDetails } from "./components/CountryDetails"
import { Routes, Route } from "react-router-dom";  
import CountL from "./countries.json"
import CountriesList from './components/CountriesList';
import { useState,useEffect } from "react";          
function Ntf() {
  return <>Not Found</>
}
function App() {
  const [cotries,setcotries]=useState()

  useEffect(() => {                                        // <== ADD THE EFFECT
    setcotries(CountL)
  }, [] );
  return (
    <div className="App">

      <Navbar />
      <div className="container">
        <div className="row">
          <div class="col-4" >
            <CountriesList con={CountL} />
          </div>
          <div class="col-8" >
            <Routes >
              <Route
                path="/countries/:id"
                element={<CountryDetails />}
              />
            </Routes >
          </div>
        </div>
      </div>


    </div>
  );
}

export default App;
