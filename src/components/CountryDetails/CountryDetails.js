import { Link, useParams } from 'react-router-dom'

function CountriesDetails({ countries }) {
    const { countries_alpha3Code } = useParams()




    return (
        <div>

            <h1>Details of Countries {countries.alpha3Code}</h1>

            <link to="/countrydetails/:alpha3Code">Mostrar</link>

        </div>
    )
}

export default CountriesDetails