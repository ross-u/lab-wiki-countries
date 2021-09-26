import React from 'react'
import countries from '../countries.json'
import { useState } from 'react'
import {Link} from 'react-router-dom'



export default function CountryDetails(props) {
// console.log('these are props', props)
    const countryId = props.match.params.id
    console.log('projectId', countryId)
 

    // let country =  countries.find(country => country.alpha3Code === countryId)
    const getCountry = countryCode => countries.find(country => country.alpha3Code === countryCode)

    // const country = {...getCountry(props.match.params.id)}
    const country = getCountry(countryId)
    if(country === undefined) return <h1>Not a valid country id</h1>

    let borders = country.borders.map((border) => {
        // console.log(border)
        return getCountry(border)
    })
    let borderNames = borders.map(border => {
        return <div>{border.name}</div>
        
    })


        // console.log('the country',country)

    return (
        <div class="container">
            <div class="row">
                <h1>{country.name}</h1>
                <h3>Capital {country.capital}</h3>
                <h3>Area {country.area} km</h3>
              
                    {borders.map(border => {
                        return(
                            <ul>
                    <li key={country.alpha3Code}>
                    <Link to={`/${border.alpha3Code}`}>{border.name}</Link>
                    </li>
                </ul>
                        )
                })}

            </div>
        </div>
    )
}
