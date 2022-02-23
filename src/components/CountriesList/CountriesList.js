import { Link } from "react-router-dom"

const CountriesList = ({ countries }) => {
    return (
        <div>
            <h1>List of countries</h1>
            {
                countries.map(elm => {
                    return (<div key={elm.name.common}>
                        <Link to={elm.alpha3Code}>
                            <img style={{ width: '100px' }} src={`https://flagpedia.net/data/flags/icon/72x54/${elm.alpha2Code.toLowerCase()}.png`} alt="flag image" />
                            <p>{elm.name.common}</p>
                        </Link>
                    </div>)
                })
            }
            <hr></hr>
        </div>
    )
}

export default CountriesList