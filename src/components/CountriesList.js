import React from 'react'
import { Link } from 'react-router-dom';

export default function CountriesList(props) {
    const countriesList =  props.countries.map(country =>  <p><Link to={`/${country.alpha3Code}`}>{country.name}</Link></p>)
	return (
		<div>
           {countriesList}
        </div>
	)
}
