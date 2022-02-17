import { Route, Switch } from 'react-router';
import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';


const ChooseACountry = () => <h4>👇🏼 Choose a Country👇🏼</h4> 


function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/" component={ChooseACountry} />
        <Route exact path="/:A3C" component={CountryDetails} />
        <Route component={NotFound} />
      </Switch>
      <br /><br />

      <CountriesList />
      
    </div>
  );
}

export default App;
