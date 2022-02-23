
import './App.css';
import Navbar from './Components/Navbar';
import CountryList from './Components/CountryList';
import CountryDetails from './Components/CountryDetails';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{ display: "flex" }}>
        <CountryList />
        <Routes>
          <Route path="/:code" element={<CountryDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
