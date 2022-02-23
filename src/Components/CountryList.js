import countriesDB from "./../countries.json"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

function CountryList() {

    const [fetching, setFetching] = useState(true)
    const [countries, setCountries] = useState(countriesDB)



    useEffect(() => {
        console.log("useEffect - Initial render (Mounting)")
        if (countriesDB.length !== 0) {
            setFetching(false)
        }
    }, [])


    return (

        <div style={{ border: "1px solid black", padding: "10px", width: "50%" }}>
            {fetching && <p>Cargando paises desde la API ...</p>}
            {
                countries.map((elm, idx) => {
                    return (

                        <div key={elm.alpha3Code} style={{ border: "1px solid black", padding: "10px" }}>

                            <div>
                                <Link to={elm.alpha3Code}>
                                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${elm.alpha2Code.toLowerCase()}.png`} />
                                    <p>{elm.name.common}</p></Link>
                            </div>


                        </div>
                    )
                })
            }

        </div>
    )


}

export default CountryList

