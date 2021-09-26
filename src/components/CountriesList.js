import React from 'react'
import {Link} from 'react-router-dom'
import countries from '../countries.json'
import { useState } from 'react'
import yeFlag from '../ye-flag.jpeg'



export default function CountriesList() {
const [countriesList] = useState(countries)
return(
    
countriesList.map((country) => {
      return (
        <div className="container">
            <div className="row">
                <div className="col-5">
                    <div className="list-group">
                        <Link to={`/${country.alpha3Code}`}>
                        <img src={yeFlag} alt="" style={{width:"200px"}}></img>
                        <p>{country.name}</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
         )
        })
    
        )
    }
