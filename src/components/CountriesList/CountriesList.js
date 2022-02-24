import { Link } from "react-router-dom"

function CountriesList(props) {
    const { countries } = props

    return (
        <div>
            <h2>List of Countries</h2>
            <hr></hr>

            {countries.map(country => {
                return (
                    //Link to={'/${country.alpha2Code}'}
                    <div key={country.alpha2Code}>
                        <h3>{country.name.common}</h3>
                        <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}></img>

                        <Link to={`/:alpha3Code${country.alpha2Code}`}>{country.alphaCode3}</Link>
                    </div>
                )
            })}
        </div>
    )

}

export default CountriesList