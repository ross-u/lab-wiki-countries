import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

function CountriesList({ theCountries }) {
    const [countries, setCountries] = useState(theCountries)

    return (
        <div className="col-5">

            <h2>Countries</h2>
            <hr />

            {countries?.map(country => {
                const { name, alpha3Code, alpha2Code } = country
                return (
                    <Link className='list' to={`${alpha3Code}`} >
                        <img src={`https://flagpedia.net/data/flags/icon/72x54/${alpha2Code.toLowerCase()}.png}`} />
                        <h3>{name.common}</h3>
                    </Link>
                )
            })
            }
        </div>
    )
}
export default CountriesList