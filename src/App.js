import "./App.css";
import CountriesList from "./components/CountriesList";
import Navbar from "./components/Navbar";
import CountryDetails from "./components/CountryDetails";
import {Route, Switch} from "react-router";
import {useState, useEffect} from 'react'
import countriesList from "./countries.json"

function App() {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setCountries(countriesList);
  }, [countriesList]);

  return (<div className = "App">
    <Navbar/>
 <div className="container">
    <div className="row" id="row">
    <CountriesList countries={countries}/>
    <Switch>
 <Route path="/:countryId" render={(props) => (<CountryDetails {...props} countries={countries}/>)} />
  </Switch>
   </div>
  </div>
  </div>)
}
export default App;