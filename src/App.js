import "./App.css";
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import { Switch, Route } from "react-router-dom";
import coutriesData from './countries.json'

function App() {
  return (
    <div className="App">
     <Navbar />
     <Switch>
        <Route
          exact
          path="/"
          render={(routeProps) => {
            return <CountriesList {...routeProps} countries={coutriesData} />;
          }}
        />
      </Switch>

    </div>
  );
}
export default App;