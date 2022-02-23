import './App.css';
import Navbar from './components/Navbar/Navbar';
import countries from './countries.json';
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
          <Routes>
            <Route path="/countrydetails/:alpha3Code" element={<CountryDetails />}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

{
  /* <Route path="/" element={<CountriesList />} /> */
}

// <CountriesList countries={countries} />;
{
  /* <Route path="/" element={<CountriesList countries={countries} />} />; */
}
