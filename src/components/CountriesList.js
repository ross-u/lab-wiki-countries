import React from 'react'
import { Link } from 'react-router-dom'
import countriesList from "../countries.json"

function CountriesList() {

	return (
		<div class="col-5" style={{ maxHeight: "90vh", overflow: "scroll" }}>
			<ul class="list-group">
				{countriesList.map((country) => <li class="list-group-item list-group-item-action">
					<Link to={`/${country.alpha3Code}`}>
						<img src={`https://www.countryflags.io/${country.alpha2Code}/flat/64.png`} alt="imagen" />
						<p>{country.name}</p>
					</Link>
				</li>)
				}

			</ul>
		</div>
	)
}

export default CountriesList



