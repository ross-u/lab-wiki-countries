import { useState } from 'react';
import './App.css';
import CountriesList from './components/CountriesList/CountriesList';
import Navbar from './components/Navbar/Navbar';

import countriesFromJSON from './countries.json'

function App() {
  
  const [countries, setCountries] = useState(countriesFromJSON)

  return (
    <div className="App">
      <Navbar />
      <CountriesList countries={countries}/>
    </div>
  );
}

export default App;
