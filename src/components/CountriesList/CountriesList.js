import { Link } from "react-router-dom"


function CountriesList({countries}) {
    return (
        <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll", textAlign: "center"}}>
            {countries.map(country => {
                return (
                    <div>
                        <img style={{width: "100px"}} src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}/>
                        <br/>
                        <Link to={`/${country.alpha3Code}`}>{country.name.common}</Link>
                        <br/><br/>
                    </div>
                )
            })}
        </div>
    )
}

export default CountriesList