import { Link, useParams } from 'react-router-dom'

const CountryDetails = ({ theCountries }) => {

    const { alpha3Code } = useParams()

    const matchedCountry = theCountries.filter(country => country.alpha3Code === alpha3Code)

    return (

        <div class='col-7'>
            <h1>Detalles</h1>
            <hr />
            <h3>{matchedCountry[0].name.common}</h3>
            <p>Capital: {matchedCountry[0].capital[0]}</p>
        </div>

    )
}

export default CountryDetails 