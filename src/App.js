import Navbar from "./components/Navbar"
import CountriesList from "./components/CountriesList"
import CountryDetails from "./components/CountryDetails"
import CountriesData from "./countries.json"
import { Switch, Route } from "react-router-dom"
import {useState, useEffect} from "react"

import "./App.css";


function App() {
  const[fetching, setFetching] = useState(true)
  const[countries, setCountries] = useState([])

  useEffect(() => {
      setCountries(CountriesData)
      setFetching(false);
      console.log("Countries :" , countries)
    
    }, []);



  return (
  
  <div className="App">
    <Navbar/>
      
      {fetching && <p>Loading ...</p>}

    <div className="container">
      <div className="row">

        <CountriesList countriesList={countries}/>
          <Switch>
            <Route path="/:alpha3Code"
              render={(routeProps) => {
                  return <CountryDetails {...routeProps} />}
              }
            />
          </Switch>
      </div>
    </div>
  </div>
  )
}


export default App;

