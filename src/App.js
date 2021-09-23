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
      <div class="container">
        <div class="row">
          <div class="col-5 list-div">
            <div class="list-group">
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
