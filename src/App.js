import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from './Components/Navbar/Navbar'
import CountriesList from "./Components/CountriesList/CountriesList";
import CountryDetails from "./Components/CountryDetails/CountryDetails";

function App() {
  return (
  <div className="App">

    <Navbar />
    <Routes> 
      <Route path="/allcontries" element={<CountriesList />} />
      <Route path="/countries/:id" element={<CountryDetails />} />

     </Routes>

  </div>
  )
}
export default App;


