import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './CountryDetails.css'

function CountryDetails({countries}){

    const { country_id } = useParams()
    const [country, setCountry] = useState(undefined)
    const [borders, setBorders] = useState([])

    useEffect(() => {
        const selectedCountry = countries.filter(country => country.alpha3Code === country_id)[0]
        const formattedBorders = countries.reduce((acc, currentValue) => {
            if (selectedCountry.borders.indexOf(currentValue.alpha3Code) > -1) acc.push({ alpha3Code: currentValue.alpha3Code, name: currentValue.name.official })

            return acc
        },[])
        setBorders(formattedBorders)
        setCountry(selectedCountry);
    }, [countries, country_id])


    return(
        <>
            {country && <div className="country-details col-7">
                <img src={`https://restcountries.eu/data/${country_id.toLowerCase()}.svg`} alt="country flag" />
                <h1>{country.name.official}</h1>
                <table className="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td className="capital-label" >Capital</td>
                            <td>{country.capital}</td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>
                                {country.area} km <sup>2</sup>
                            </td>
                        </tr>
                        <tr>
                            <td>Borders</td>
                            <td>
                                <ul>
                                    {borders.map(border => {
                                        return(
                                            <li key={border.alpha3Code}>
                                                <Link to={`/countries/${border.alpha3Code}`}>{border.name}</Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>}
        </>
    )
}

export default CountryDetails