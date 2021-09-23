import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App">
      
      <Route render={(props) => <SomeComponent {...props} otherProp={someData} > } />
        
     
    </div>
  );
}

export default App;
