import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

function CountriesList({ theCountries }) {

    const [countries, setCountries] = useState([])

    useEffect(() => {
        setCountries(theCountries)
    }, [])

    return (

        <div>
            <h2>I am the Country list</h2>

            {
                countries.map(country => {
                    return (
                        <div key={country.alpha3Code}>


                            <h2>{country.name.common} </h2>

                            <Link to={`/country/${country.alpha3Code}`}>
                                Ver detalles del país {country.name.common}
                            </Link>

                        </div>

                    )

                })
            }

        </div>
    )
}

export default CountriesList