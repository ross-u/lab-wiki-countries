import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import { Switch, Route } from 'react-router-dom';
import CountriesList from './components/CountriesList.js';
import CountryDetails from './components/CountryDetails.js';
import countries from './countries.json';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="bodyInfo">
        <div className="list">
          <CountriesList />
        </div>
        <div class="info">
          <Switch>
            <Route
              exact
              path="/:id"
              render={(routeProps) => {
                return <CountryDetails {...routeProps} project={countries} />;
              }}
            />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
