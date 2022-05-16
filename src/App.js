import './App.css';
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'
import paises from './countries.json'
import {useState, useEffect} from 'react'

import {Routes, Route} from 'react-router-dom'

function App() {

  const [countries, setCountries] = useState([])
  

  useEffect(()=> {
    setCountries(countries)
  },[countries])

  return (
    <div className="App">
      <Navbar />
      <main className="row">
        <div className="col-4">
          <CountriesList paises={paises}/>
        </div>
        <div className="col-4">

            <Routes>

                <Route path='/details/:id' element={<CountryDetails paises={paises}/>}/>


            </Routes>


        </div>
      </main>      
    </div>
  );
}

export default App;
