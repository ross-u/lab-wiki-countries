import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from "react";


function CountryDetails({ countries }) {

    const [theCountries, setTheCountries] = useState([])
    useEffect(() => {

        axios
            .get('https://ih-countries-api.herokuapp.com/countries/ESP')
            .then(response => {
                setTheCountries(response.data)
            })
    }, [])


    const { id } = useParams()
    const filteredCountry = theCountries.filter(elm => elm.alpha3Code === id)
    // console.log(filteredCountry)
    // console.log(filteredCountry[0].name)

    const border = filteredCountry[0].borders
    console.log(border)
    return (
        <div>

            <h1>Pais: {filteredCountry[0].name.common} </h1>
            <p>Area: {filteredCountry[0].area}</p>
            <p>Capital: {filteredCountry[0].capital}</p>
            <p>Borders:</p>
            <ul >
                {
                    border.map((border, idx) =>
                        <li key='idx' > {border}</li>)
                }
            </ul>

        </div>
    )
}

export default CountryDetails