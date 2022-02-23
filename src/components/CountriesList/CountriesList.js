import { Link } from "react-router-dom"

const CountriesList = ({ countries }) => {
    return (
        countries.map(count => {
            return (
                <div className='countryList' key={count.alpha3Code}>
                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${count.alpha2Code.toLowerCase()}.png`} />
                    <Link to={`/${count.alpha3Code}`}>
                        {count.alpha3Code}
                    </Link>
                </div>
            )
        })
    )
}

export default CountriesList