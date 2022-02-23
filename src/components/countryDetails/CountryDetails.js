import './CountryDetails.css'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect, setState } from "react"
import countries from './../../countries.json'
import axios from 'axios'



function CountryDetails() {

    const { id } = useParams()

    const [country, setCountry] = useState(countries)
    const [countryBk, setCountryBk] = useState(countries)

    // useEffect(() => {
    //     axios
    //         .get(`https://ih-countries-api.herokuapp.com/countries/${id}`)
    //         .then(response => {

    //         setCountry(response.data)

    //         })

    // }, [])  ALGO NO FUNCIONA PESE A DEVOLVERME SOLO EL QUE QUIERO COMO RESPONSE


    useEffect(() => {

        setCountry(country.filter(elm => id === elm.alpha3Code))
       

    }, [])



    console.log('el bk', country[0].name.common)


    return (
        <>

            <h1> Lista detalle de {country[0].name.common} </h1>
            <hr />
            <h2> Capital: {country[0].capital} </h2>
            <h2> Area: {country[0].area}km2 </h2>
            <ul> 
                {
                    country[0].borders.map((elm, idx) => {
                        return (
                            <a key={idx} href={`/details/${elm}`}>
                                <li >{elm}</li>  </a>
                        
                        )
                    })

                }
            </ul>

        </>
    )
}

export default CountryDetails;