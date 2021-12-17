import React from 'react'
import { Link } from 'react-router-dom'
const CountriesList = props => {

    let countryList = props.countries
    .map( country => {

        return (
          <div>
              <Link key={country.alpha3Code} to={`${country.alpha3Code}`}>{country.name.common}</Link>
          </div>  
        )
        
   
    })

	return (
		<div>
			{countryList}
		</div>
	)
}
export default CountriesList