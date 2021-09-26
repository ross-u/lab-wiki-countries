
import './App.css';
import Navbar from './components/Navbar';
import countries from './countries.json'
import {useState, useEffect} from 'react'
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import {Route, Switch} from 'react-router-dom'
import axios from 'axios';

 
function App() {

  const [countriesList, setCountriesList] = useState(countries)

  // useEffect(() => {
  //   // get the countries from the server
  //   axios.get('/countries')
  //   .then(response => {
  //     console.log(response.data)
  //     // set the state of countries
  //     setCountriesList(response.data)
  //   })
  //   .catch(err => console.log(err))
  // })


  return (
    <div className="App">
    <Navbar /> 
     <div class="container">
      <div class="row">
    
      <Route exact path="/:id" component={CountryDetails}/>
        <Route component={CountriesList} />
      </div>
    </div>
    {/* <Route render={(props) => <CountryDetails {...countriesList}/> } /> */}
    {/* <Route render={(props) => <CountryDetails {...countriesList} countries={countries} > } /> */}
    
    </div>
  );
}

export default App;
