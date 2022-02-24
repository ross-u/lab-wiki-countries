import countriesJson from "./../countries.json"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";


function CountriesList() {

    const [countries, setCountries] = useState([])


    useEffect(() => {
        setCountries(countriesJson)
    }, [])




    return (

        <div className="col-md-6" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
            <div className="list-group">
                <ul>

                    {
                        countries.map(country =>
                            <Link to={`/${country.alpha3Code}`}>
                                <li className="list-group-item list-group-item-action" key={country.alpha3Code}>{country.name.common}</li>
                            </Link>
                        )
                    }

                </ul>
            </div>
        </div>

    )
}

export default CountriesList;

