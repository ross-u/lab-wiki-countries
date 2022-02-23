import { Link } from "react-router-dom"


const CountriesList = ({ props }) => {

    const mystyle = {
        maxHeight: "90vh",
        overflow: "scroll",
        textAlign: "center"
    }

    return (
        <div className="col-5" style={mystyle}>
            <div className="list-group">
                {props.map(country => {
                    return (
                        <div key={country.alpha3Code}>
                            <Link className="list-group-item list-group-item-action" to={`/${country.alpha3Code}`} >
                                < img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={country.name.official} />
                                <p>{country.name.official}</p>
                            </Link>
                        </div>
                    )
                })}
            </div >
        </div >
    )
}


export default CountriesList