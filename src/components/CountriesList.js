import React from 'react'
import { Link } from 'react-router-dom'
import countriesList from "../countries.json"

export default function CountriesList(props) {

    return (
        <div class="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
            <ul class="list-group">
					{countriesList.map((country) => 
				<li class="list-group-item list-group-item-action" href="/ABW">
					<Link to={`/${country.alpha3Code}`}>
						<img src={`https://www.countryflags.io/${country.alpha2Code}/flat/32.png`} 
							alt={`${country.name}`} />
								<h2>{country.name}</h2>
					</Link>
				</li>)
            }
            </ul>
        </div>
    )
};