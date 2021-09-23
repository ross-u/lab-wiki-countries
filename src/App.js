import "./App.css";
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import { Route } from 'react-router-dom';
import allCountries from './countries.json'

function App() {
  return (
  <div className="App">
    <Navbar />
    <div className="container">
      <div className="row">
        <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
          <CountriesList countries ={allCountries}/>
        </div>
        <div className="col-7">
          <Route exact path="/:alpha3Code" render={(props) => <CountryDetails {...props} countries={allCountries}/> } />
      </div>
      </div>
    </div>
  </div>
  );
}
export default App;
