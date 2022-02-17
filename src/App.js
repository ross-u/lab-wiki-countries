import { useState, useEffect } from 'react';

import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
function App() {

  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('https://restcountries.com/v3/all');
    const dataJson = await data.json();
    console.log(dataJson)
    setItems(dataJson)
  }

 

  return (
    <div className="App">
     <Navbar />
     <Link to='/countries'>List</Link>
    <div className='stuff'>
    <Router >
    <Route path='/countries' exact >
    <CountriesList countries={items}/>
    </Route>
    <Route path='/details/:country' exact>
    <CountryDetails />
    </Route>
    </Router>
    </div>
    </div>
  );
}

export default App;

// {items.map(item => (
//   <img src={item.flags[1]} alt="" />
// ))}