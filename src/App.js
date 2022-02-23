import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import countries from './countries.json'

function App() {


  return <div className="App">
    <Navbar />

    <Routes>

      <Route path='/country-list' element={<CountriesList theCountries={countries} />} />


      <Route path='country/:country_id' element={<CountryDetails theCountries={countries} />} />


    </Routes>
  </div>;
}
export default App;