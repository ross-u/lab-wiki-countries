import React from 'react'
import { Link } from 'react-router-dom';

export default function CountriesList(props) {
    const countriesList =  props.countries.map(country => {
        return <div><img src={`https://www.countryflags.io/${country.alpha2Code}/flat/32.png`} alt=''></img>
        <Link to={`/${country.alpha3Code}`}>{country.name}</Link></div>
        })
	return (
		<div>
           {countriesList}
        </div>
	)
}
