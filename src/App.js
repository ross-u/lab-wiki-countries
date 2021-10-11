// src/App.js
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import CountryDetails from "./components/Countries/CountryDetails"

import Nav from "./components/Layout/Nav"

import Countries from "./components/Countries"

import Welcome from "./components/Countries/Welcome"



function App() {
  return (
  <Router> 

  <Nav></Nav>

    <Switch> 

    <Route path="/"  render={(props) => {
      return (
      <>
          <Countries>
            
        <Route exact path={`${props.match.url}:country`} component={ CountryDetails } /> 
        <Route exact path={`${props.match.url}`} component={ Welcome } /> 
    
          </Countries>
      </>
      )
     }}  />

    </Switch>
 

    </Router> 
  )
}
export default App;