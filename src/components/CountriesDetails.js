import {Link, useParams} from "react-router-dom";
import countries from "../countries.json"

const CountriesDetails = () => {
    const getCountryByCode = (code) => countries.find((c) => c.alpha3Code === code);

    const params = useParams();
    const country = getCountryByCode(params.alpha3code);

    return (
        <>
            <img src={`https://www.countryflags.io/${country.alpha2Code}/flat/32.png`} alt="country flag"
                 style={{width: '300px'}}/>
            <h1>{country.name.common}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                <tr>
                    <td style={{width: "30%"}}>Capital</td>
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
                        <div style={{display: 'flex', 'flex-direction': 'column'}}>
                            {
                                country.borders.map(border => <Link class="navbar-brand" to={`/${border}`}>{getCountryByCode(border).name.common}</Link>)
                            }
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </>
    );
}

export default CountriesDetails;