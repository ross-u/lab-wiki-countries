import Navbar from "./components/Navbar"
import CountriesList from "./components/CountriesList"
import CountryDetails from "./components/CountryDetails"
import CountriesData from "./countries.json"
import { Switch, Route } from "react-router-dom"

import "./App.css";

function App() {
  return (
  
  <div className="App">
    <Navbar/>
    <CountriesList/>
    <Switch>
      <Route path="/:alpha3Code"
        render={(routeProps) => {
            return <CountryDetails {...routeProps} />}
        }
      />
    </Switch>
  </div>

  )
}

export default App;

