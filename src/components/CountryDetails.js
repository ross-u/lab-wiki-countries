import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


function CountryDetails({ theCountries }) {

    const [countries, setCountries] = useState([])

    useEffect(() => {
        setCountries(theCountries)
    }, [])

    const { country_id } = useParams()


    const matchCountry = theCountries.filter(country => country.alpha3Code === country_id)


    const borders = matchCountry[0].borders

    return (
        <div>

            <h2>I am the country details page</h2>
            <h3>Name: {matchCountry[0].name.official}</h3>
            <h3>Capital: {matchCountry[0].capital}</h3>
            <h3>The borders of {matchCountry[0].name.official} are:
                {borders.map((border, i) => <div key='i' > {border}</div>)
                }
            </h3>

        </div>
    )

}

export default CountryDetails