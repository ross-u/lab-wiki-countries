import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import CountriesList from './components/countriesList/CountriesList';
import Navbar from './components/navbar/Navbar';
import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import CountryDetails from './components/countryDetails/CountryDetails';


function App() {
  return (
    <div className="App">

      <Navbar></Navbar>
      
      <Routes>
       
        <Route path='/' element={<CountriesList />} />
        <Route path='/details/:id' element={<CountryDetails />} />
        
      </Routes>

    </div>
  );
}

export default App;
