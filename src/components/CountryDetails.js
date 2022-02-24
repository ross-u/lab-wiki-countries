import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import countriesJson from "./../countries.json"

function CountryDetails() {

    const { id } = useParams()

    const [countries, setCountries] = useState(countriesJson)

    useEffect(() => {

        setCountries(countries.filter(country => id === country.alpha3Code))

    }, [])

    return (

        <div className="col-md-6">
            <p>{countries[0].name.common}</p>
            <p>{countries[0].capital}</p>
            <p>{countries[0].area}</p>
        </div>

    )
}


export default CountryDetails


