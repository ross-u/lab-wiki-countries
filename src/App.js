import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Switch, Route } from 'react-router-dom';
import countries from './countries.json';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div class="container">
        <div class="row">
        <CountriesList countries={countries} />
        </div>
        <div class="col-7">
        <Switch>
          <Route
            path="/countries/:country"
            render={(props) => <CountryDetails {...props} />}
          />
        </Switch>
        </div>
      </div>
    </div>
  );
}
export default App;
