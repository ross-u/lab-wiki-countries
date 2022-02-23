import { Link, useParams } from "react-router-dom"



function CountryDetails({ countries }) {
   
    const {alpha3Code} = useParams ()

    const arrayCountry = countries.filter(country => country.alpha3Code === alpha3Code)


    return (
        <div className="col-7">
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${arrayCountry[0].alpha2Code.toLowerCase()}.png`} alt="Banderas" style={{ width: "120px" }} />
            <h1>{arrayCountry[0].name.common}</h1>
            <p>Capital {arrayCountry[0].capital}</p>
            <p>Extensión {arrayCountry[0].area} km </p>
            <h3>Fronteras</h3>
            {
                countries.map(country => {
                    return (
                        country.borders.map((borders) =>
                        (<li>
                            <Link to={`/${borders}`}>{borders}</Link>
                        </li>)
                        )
                    )
                })
            }
        </div>
    )
}


export default CountryDetails;