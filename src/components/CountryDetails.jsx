import {Link} from "react-router-dom"

export default function CountryDetails(props) {
    const {countriesData} = props
    const countryCode = props.match.params.countryAlpha3Code

    console.log("country code" ,countryCode)


    const country = countriesData.find((element) => element.alpha3Code === countryCode)
    console.log("found country", country)
    console.log("name", country.name)

    return (
        <>
            <div className="col-7">
                <img src={"https:www.countryflags.io/"+country.alpha2Code+"/flat/32.png"} alt="country flag"/>
                <h1>{country.name}</h1>
                <table className="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                        <td >Capital</td>
                        <td>{country.capital}</td>
                        </tr>
                        <tr>
                        <td>Area</td>
                        <td>
                            {country.area} km <sup>2</sup>
                        </td>
                        </tr>
                        <tr>
                            <td>Borders</td>
                            <td>
                                <ul>
                                {country.borders.map (border => {
                                    return (
                                        <li key={border}><Link to={"/"+ border}>{border}</Link></li>
                                    )
                                })
                                }
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
        </div>
      </>
    )
}
