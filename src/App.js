import { Route, Routes } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import './App.css';
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';
import Navbar from './components/Navbar/Navbar';
import countriesData from './countries.json';
import axios from 'axios';


function App() {

  const [currentCountries, setCurrentCountries] = useState(countriesData);

  useEffect(()=>{
      const getCountriesFromAPI= async () =>{
          const {data} = await axios( 'https://ih-countries-api.herokuapp.com/countries'

          );
          setCurrentCountries(data)
      };
      getCountriesFromAPI()
  },[])

  if (currentCountries === null) {
    return <h3>... Loading</h3>;
  } else { 
    
    return (
      <>
    <Navbar />
    <div className=" page-container container ">
     
       
          <CountriesList countries={currentCountries} />
      
          <Routes>
            <Route path="/:alpha3Code" element={<CountryDetails countries ={currentCountries} />} />
          </Routes>
       
      
    </div>
    </>
  );
}
}

export default App;
