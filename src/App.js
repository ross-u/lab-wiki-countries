import "./App.css";
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import countries from "./countries.json";
import {Routes, Route} from "react-router-dom";
import {useState}from "react"



function App() {
  const [countriesCopy, setCountry] = useState([...countries])
    return (
        <div className="App">
            <Navbar/>
            <div className="container">
                <div className="row">
     
                <Routes>
                  <Route path="/" element={<CountriesList countries={countriesCopy}/>}/>
                  <Route path="/:alpha3Code" element={<CountryDetails countries={countriesCopy}/>}/>
                </Routes>
                    
                </div>
            </div>
        </div>
    )
}
export default App;
