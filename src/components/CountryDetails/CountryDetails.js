import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

const CountryDetails = () => {

    const { countryCode } = useParams()
    const [disCountry, setDisCountry] = useState([])

    useEffect(() => {
        axios
            .get(`https://ih-countries-api.herokuapp.com/countries/${countryCode}`)
            .then(response => setDisCountry(response.data))
    }, [countryCode])


    return (
        // No supimos el por qué no funciona :(
        <div>
            {
                disCountry.map(elm => {
                    return <div key={elm.name.common}>
                        <img src={`https://flagpedia.net/data/flags/icon/72x54/${elm.alpha2Code.toLowerCase()}.png`} style={{ width: '300px' }} alt="flag image" />
                        <h1>{elm.name.common}</h1>
                        <table className="table">
                            <thead></thead>
                            <tbody>
                                <tr>
                                    <td style={{ width: '30%' }}>Capital</td>
                                    <td>{elm.capital}</td>
                                </tr>
                                <tr>
                                    <td>Area</td>
                                    <td>
                                        {elm.area} km <sup>2</sup>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Borders</td>
                                    <td>
                                        <ul>
                                            {elm.borders.map(allBorders => {
                                                return <li><Link to={`/${allBorders}`}>{allBorders}</Link></li>
                                            })}
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                })
            }
        </div>
    )
}

export default CountryDetails