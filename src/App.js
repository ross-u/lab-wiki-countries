import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Countries from './Components/Countries';
import CountryDetails from './Components/Countries/CountryDetails';
import Welcome from './Components/Countries/Welcome';
import Nav from './components/Layout/Nav'

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route
          path="/"
          render={(props) => {
            return (
              <>
                <Countries>
                  <Route
                    exact
                    path={`${props.match.url}:country`}
                    component={CountryDetails}
                  />
                  <Route
                    exact
                    path={`${props.match.url}`}
                    component={Welcome}
                  />
                </Countries>
              </>
            );
          }}
        />
      </Switch>
    </Router>
  );
}

export default App;