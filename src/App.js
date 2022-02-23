import './App.css';
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios';
import Navbar from './components/NavBar/NavBar'
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';


// import countriesFakeApi from './countries.json'

function App() {

  const [countries, setCountries] = useState([])
  const [fetching, setFetching]= useState(true)

  // useEffect(() => {
  //   setCountries(countriesFakeApi)
  // }, [])

  useEffect(() => {
      axios
        .get('https://ih-countries-api.herokuapp.com/countries')
        .then(response => {
          setCountries(response.data)
          setFetching(false)
        })
  }, [])

    return (
      <div className="App">
            <Navbar />
            {fetching && <p>Cargando paises desde la API ...</p>}
            <div className="container">
              <div className="row">
                <CountriesList countries={countries} />
                <Routes>
                  <Route path='/countries/:country_id' element={<CountryDetails countries={countries}/>} />
                </Routes>
              </div>
            </div>
      </div>
    )
}

export default App;
