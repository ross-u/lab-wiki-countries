import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import './CountriesList.css'


const CountriesList = ({ theCountries }) => {

    const [countries, setCountries] = useState(theCountries)

    return (
        <div class='col-5'>
            <h1>Listado de países</h1>
            <hr />


            {countries.map(country => {
                return (
                    <div className='CountryCard' key={country.alpha3Code}>
                        <Link to={`${country.alpha3Code}`}>
                            {country.name.common}
                        </Link>
                    </div>
                )
            })
            }

        </div>
    )

}

export default CountriesList