import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import Countries from './countries.json'
import CountryDetails from './components/CountryDetails';
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App(props) {
  console.log(Countries)
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-5 list-div">
            <div className="list-group countries-list">
              <CountriesList Countries={Countries} />
            </div>
          </div>
          <Route exact path='/:countryCode' component={CountryDetails} />
        </div>
      </div>
    </div>
  );
}

export default App;
