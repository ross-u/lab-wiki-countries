
import "./App.css";
import Navbar from './components/Navbar/Navbar'
import CountriesList from './components/CountriesList/CountriesList'
import CountryDetails from "./components/CountryDetails/CountryDetails";
import { Routes, Route } from 'react-router-dom'


function App() {
  return <div className="App">

    <Navbar />

    <Routes>
      <Route path='/countries' element={<CountriesList />} />
      <Route path='/countries/:identification' element={<CountryDetails />} />
    </Routes>

  </div>;
}
export default App;

