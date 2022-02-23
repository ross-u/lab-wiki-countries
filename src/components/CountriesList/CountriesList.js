import { Link } from "react-router-dom"

function CountriesList({countries}) {

    const divStyle = {
        maxHeight: '90vh',
        overflow: 'scroll'
    }

    return (
        <div className="col-5" style={divStyle}>
            <div className="list-group">
                {countries.map((country, index) => {
                    return (
                        <Link key={country.alpha3Code} to={`/countries/${country.alpha3Code}`} className="list-group-item list-group-item-action">
                            <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="" />
                            <p>{country.name.official}</p>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default CountriesList





