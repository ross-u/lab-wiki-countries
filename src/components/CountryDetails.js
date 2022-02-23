import { Link, useParams } from 'react-router-dom'

const CountryDetails = ({ props }) => {

    const { id } = useParams()

    const arrayCountry = props.filter(country => {
        return (country.alpha3Code === id)
    })

    return (
        <div className="col-7">
            <img className="rounded mx-auto d-block" src={`https://flagpedia.net/data/flags/icon/72x54/${arrayCountry[0].alpha2Code.toLowerCase()}.png`} alt="country flag" style={{ width: "300px" }} />
            <h1>{arrayCountry[0].name.common}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td style={{ width: "30%" }}>Capital</td>
                        <td>{arrayCountry[0].capital}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>
                            {arrayCountry[0].area} km <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                {
                                    props.map(country => {
                                        return (
                                            country.borders.map((borders) =>
                                            (<li>
                                                <Link to={`/${borders}`}>{borders}
                                                </Link>
                                            </li>)
                                            )
                                        )
                                    })
                                }
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CountryDetails