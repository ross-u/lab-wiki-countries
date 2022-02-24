import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Api from './../countries.json'

const CountriesList = () => {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        setCountries(Api)
    }, []);


    let countriesCopy = [...Api]


    return (
        <div className="container">
            {countriesCopy.map(elm => {
                return (
                    <div className="row" key={elm.name.common}>
                        <img src={`https://flagpedia.net/data/flags/icon/72x54/${elm.alpha2Code.toLowerCase()}.png`} alt={elm.name.common}></img>
                        <Link to={`/${elm.alpha3Code}`}>
                            <p>{elm.name.common}</p>
                        </Link>
                    </div>
                )
            })}
        </div >
    )
}
export default CountriesList