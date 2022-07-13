import countriesList from './countries.json'
import Navbar from './components/Navbar.js';
import CountriesList from './components/CountriesList.js';
import CountryDetails from './components/CountryDetails.js';
import { Switch, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import "./App.css";

function App() {
	const [countries, setCountries] = useState([]);

	useEffect(() => {
		setCountries(countriesList);
	}, []);

	return (
	<div className="App">
		<Navbar />
		<div className="container">
			<div className="row">
				<CountriesList/>
				<Switch>
					<Route path="/:countryId" render={(props) => (<CountryDetails {...props} countries={countries} />)} />
				</Switch>
			</div>
		</div>
	</div>)
}
export default App;





