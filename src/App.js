import "./App.css";
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

 import { Switch, Route } from "react-router-dom";

import countriesData from './countries.json';     // <== IMPORT 


function App() {

 const [allcountries, setAllcountries] = useState(countriesData);



  return (<div className="App">
                <Navbar />
                <CountriesList countries={allcountries}  />
                <Switch>
                        <Route 
                        exact 
                        path="/projects/:id" 
                        render={(routeProps) => {
                return <CountryDetails {...routeProps}  projects={countriesData} />;
              }}
        />
                </Switch>

        </div>
  )}
export default App;
