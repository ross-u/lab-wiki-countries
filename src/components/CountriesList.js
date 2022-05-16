import React from 'react'
import {Link} from 'react-router-dom'

function CountriesList(props) {
    //console.log(props.countries.alpha2Code)
    /*     {countries.map(mapConuntries=>{
        return (
          <div key={mapConuntries.alpha3Code}>

          </div>
        )
      })} */
    console.log(props)
    return (
        <div>
            <div className="col-5">
                <div className="list-group">
                    {props
                        .countries
                        .map(mapCountries => {
                            const {name, alpha2Code, alpha3Code} = mapCountries
                            return (
                                <Link key={alpha3Code} className="list-group-item list-group-item-action" to ={`/${alpha3Code}`}>
                                    <img
                                        src={`https://flagpedia.net/data/flags/icon/72x54/${alpha2Code.toLowerCase()}.png`}
                                        alt={`${name.common} flag`}/>
                                    <p>{name.common}</p>
                                </Link>
                            )
                        })}
                </div>
            </div>
        </div>
    )
}

export default CountriesList