import { Link } from 'react-router-dom'


const CountriesList = (props) => {
    const style = {
        maxHeight: "90vh",
        overflowY: "scroll"
    }

    return (
        <div className="col-5" style={style}>
            <div className="list-group">
                {props.countries.map((country, index) => {
                    return <div key={index + Date.now()}><Link className="list-group-item list-group-item-action" to={`/country/${country.alpha3Code}`}><img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="Flag" />
                        <p>{country.name.official}</p></Link>
                    </div>
                })}
            </div>
        </div>
    )

}

export default CountriesList