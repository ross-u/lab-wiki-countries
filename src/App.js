import "./App.css";
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import { Switch, Route } from "react-router-dom";
import coutriesData from './countries.json'
import { useState, useEffect } from "react";

function App() {  
  const [countries, setCountries] = useState([])

  useEffect(() => {
    setCountries(coutriesData);
    
}, []);

  return (
    <div className="App">
     <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-6">
            <CountriesList countries={countries}/>
          </div>
          <div className="col-6">
            <Switch>
                <Route 
                  path="/countries/:alpha3Code" 
                  render={(routeProps) => {
                    return <CountryDetails {...routeProps} countries={countries} />;
                  }}
                />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;