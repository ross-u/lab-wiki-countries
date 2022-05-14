import './App.css';
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountriesList'
import paises from './countries.json'
import {useState, useEffect} from 'react'

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="row">
        <div className="col-4">
          <CountriesList paises={paises}/>
        </div>
      </main>      
    </div>
  );
}

export default App;
