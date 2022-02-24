import NavBar from './Components/NavBar';
import './App.css';
import countriesFromJson from './countries.json';
import CountriesList from './Components/CountriesList';
import CountryDetails from './Components/CountryDetails';
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path= "/CountriesList" element= {<CountriesList countries={countriesFromJson}/>}/>
        <Route path="/CountryDetails/:country_id" element={<CountryDetails />}/>
      </Routes>
    </div>
  )
}

export default App;
