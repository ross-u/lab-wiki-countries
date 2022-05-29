import './App.css';
import NavBar from './components/NavBar';
import Countrieslist from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import countries from './countries.json';
import { Routes, Route } from 'react-router-dom';

function App(props) {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <div className="row">
          <Countrieslist data={countries} />
          <Routes>
            <Route path="/" />
            <Route
              path="/:alpha3Code"
              element={<CountryDetails {...props } data={countries} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
