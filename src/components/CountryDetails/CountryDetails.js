import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';

function CountryDetails({ theCountries }) {

    const { alpha3Code } = useParams()

    // let [country, setCountry] = useState({})


    // const findCountry = countryId => {
    //     const filteredCountry = theCountries.filter(elm => elm.alpha3Code === countryId)
    //     setCountry(filteredCountry[0])
    // }
    // console.log('COUNTRYYYYYY ', country)

    // useEffect(() => {
    //     findCountry(alpha3Code)
    // }, [])


    return (
        theCountries.map(elm => {
            if (elm.alpha3Code === alpha3Code) {
                return (
                    <div className='col-7 details'>
                        <img src={`https://flagpedia.net/data/flags/icon/72x54/${elm.alpha2Code.toLowerCase()}.png}`} />
                        <h1>{elm.name.common}</h1>
                        <p>{alpha3Code}</p>
                        <p>Capital: {elm.capital}</p>
                        <p>Region: {elm.region}</p>
                        <p>Status: {elm.status}</p>
                    </div>
                )
            }
        })

    )
}
export default CountryDetails