import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const CountryDetails = (props) => {

    const params = useParams()
    const { countries } = props
  

    const country = countries.filter((country) => {
        return country.alpha3Code === params.a3c
    })

    const style = {
        width: "30%"
    }

    return (
        <div className="col-7">
        <img src={`https://flagpedia.net/data/flags/icon/72x54/${country[0].alpha2Code.toLowerCase()}.png`} alt="flag" />
        <h1>{country[0].name.official}</h1>
        <table className="table">
            <thead></thead>
            <tbody>
                <tr>
                    <td style={style}>Capital</td>
                    <td>{country[0].capital}</td>
                </tr>
                <tr>
                    <td>Area</td>
                    <td>
                        {country[0].area} <sup>2</sup>
                    </td>
                </tr>
                <tr>
                    <td>Borders</td>
                    <td>
                        <ul>
                            {country[0].borders.map((border, index) => {
                                return (
                                    <li key={index + Date.now()} className="list-unstyled">
                                        <Link className="list-group-item list-group-item-action" to={`/${border}`}>{border}</Link>
                                    </li>    
                                )
                            })}
                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    )
}

export default CountryDetails