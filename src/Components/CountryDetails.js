import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from "react"
import countriesDB from "./../countries.json"



function CountryDetails() {

    const { code } = useParams()
    const [countries, setCountries] = useState(countriesDB)
    const [countriesCopy, setCountriesCopy] = useState(countriesDB)



    useEffect(() => {

        setCountriesCopy(countriesCopy.filter(elm => code === elm.alpha3Code
        ))


    }, [])



    let target = countriesCopy[0].borders

    let neightbours = target.forEach(elm => countries.filter(elm2 => elm2.alpha3Code === elm)


    )

    console.log("CODIGOS", target)
    console.log("PAISES", neightbours)




    return (

        <div style={{ border: "1px solid black", padding: "10px", width: "50%" }}>
            <h1>{countriesCopy[0].name.common}</h1>
            <p>Capital: {countriesCopy[0].capital}</p>
            <p>Area: {countriesCopy[0].area} km2</p>
            <ul>

                {countriesCopy[0].borders.map((border, idx) => {
                    return (
                        <li key={border}>
                            <Link onClick={() => setCountriesCopy(neightbours[idx])} to={`/${border}`}>{border}</Link>
                        </li>
                    )
                })}
            </ul>

        </div>

    )
}

export default CountryDetails