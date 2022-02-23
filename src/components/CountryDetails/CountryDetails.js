import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'


const CountryDetails = () => {

    const { country } = useParams()
    const [countryValue, setCountryValue] = useState({})
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        axios
            .get(`https://ih-countries-api.herokuapp.com/countries/${country}`)
            .then((response) => {
                console.log(response.data)
                setCountryValue(response.data)
                setIsLoaded(true)
            })
    }, [country])

    return (
        <div className="col-7">
            <h1>Detalles</h1>
            <div key={countryValue.name.common}>
                {/* <img src={`https://flagpedia.net/data/flags/icon/72x54/${countryValue.alpha2Code.toLowerCase()}.png`} alt="country flag" /> */}
                <h1>{countryValue.name.common}</h1>
                <table className="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td>Capital</td>
                            <td>{countryValue.capital}</td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>
                                {countryValue.area} km <sup>2</sup>
                            </td>
                        </tr>
                        <tr>
                            <td>Borders</td>
                            <td>
                                <ul>
                                    {
                                        countryValue.borders.map(eachBorder => {
                                            console.log(eachBorder)
                                            return <li key={eachBorder}><Link to={`/${eachBorder}`}>{eachBorder}</Link></li>
                                        })
                                    }
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}


export default CountryDetails