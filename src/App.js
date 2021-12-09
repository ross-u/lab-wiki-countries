import './App.css';
import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountriesDetails from './components/CountriesDetails';
import axios from "axios"//Para el USO de get
import countriesJSON from "./countries.json"


import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {

  const [countries, setCountries] = useState(countriesJSON);


  // ------------------BONUS --------------------
  // useEffect(() => {
  //   const getResponse = async () => {
  //     const res = await axios.get(`http://api.countrylayer.com/v2/all?access_key=${process.env.REACT_APP_API_KEY_COUNTRIES}`)

  //     const arrCountries = res.data;

  //     console.log(res);
  //     setCountries(arrCountries);
  //   }

  //   getResponse()

  // }, []);

  return (
    <div className="App">

      <Router>

        <Navbar />

        <Switch>

          <Route path="/" render={(props) => {
            // console.log(props);

            return (
              <>
                <div className="container">
                  <div className="row">

                    <CountriesList countries={countries}>

                      <Route exact path={`${props.match.url}:country`} component={CountriesDetails} />

                    </CountriesList>
                    {/* React-Router Switch & the Route rendering the CountryDetails should go here */}
                  </div>
                </div>

              </>
            )
          }}

          />
        </Switch>

      </Router>

    </div>
  );
}

export default App;
