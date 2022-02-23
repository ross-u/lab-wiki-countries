
import './App.css';
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';
import Navbar from './components/Navbar/Navbar';
import countriesFromJSON from './countries.json'
import { Routes, Route } from 'react-router-dom'



function App() {

  return (
    <>
      <header>

        <Navbar />

      </header>

      <body>

        <Routes>

          <Route path='/CountriesList' element={<CountriesList countries={countriesFromJSON} />} />
          <Route path='/CountryDetails/:alpha3Code' element={<CountryDetails />} />

        </Routes>
        
      </body>

    </>

  );
}

export default App;
