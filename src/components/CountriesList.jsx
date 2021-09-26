import { Link, Route } from 'react-router-dom';
import CountryDetails from './CountryDetails';
import { useState, useEffect } from 'react'
export default function CountriesList(props) {
    console.log('line 4', props)
    const [allCountries, setAllCountries] = useState(props.countries)

    useEffect(() => {
        setAllCountries(props.countries)
    }, [])
    return (
        <div>
            <ul className='left-side'>
            {allCountries.map(country => (
                <Link to={`/details/${country.name.common}`}>
                    <div>
                        <img src={country.flags[1]} alt="" />
                        <h1>{country.name.common}</h1>
                    </div>
                </Link>  
            ))}
            </ul>
        </div>
    )
}
