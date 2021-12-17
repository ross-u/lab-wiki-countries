import React from 'react'
import { useParams } from 'react-router'


const CountryDetails = props => {

   const params = useParams()
   
   const MyCountry = props.countries.find(country => country.alpha3Code === params.alpha3Code)

	return (
		<div>
			<h1>Hello {MyCountry.name.common}</h1>
		</div>
	)
}
export default CountryDetails