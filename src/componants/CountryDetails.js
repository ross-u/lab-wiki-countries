import React from 'react';
import countriesArr from '../countries.json';
import { Link } from 'react-router-dom';

export default function CountryDetails(props) {
    const countryCode = props.match.params.alpha3Code;
	const country = countriesArr.find(country => country.alpha3Code === countryCode);
    const countries = props.match.params;

	if (country === undefined) return <h1>This country doesn't exist in this database</h1>
    



        return (
        <div className="col-7">
            <img src={`https://www.countryflags.io/${country.alpha2Code}/shiny/64.png`} alt="country flag" style={{"width": "300px"}}/>
            <h1>{country.name}</h1>

            <table className="table">
            <thead></thead>

            <tbody>

            <tr>
                <td style={{"width" : "30%"}}>Capital</td>
                <td>{country.capital}</td>
            </tr>

            <tr>
                <td>Area</td>
                <td>
                    {country.area} <sup>2</sup>
                </td>
                </tr>

            <tr>
                <td>Borders</td>
                <td>
                    <ul>{country.borders.map(borders =>
                        (
                            <li style={{"list-style-type" : "none"}}>
                                <Link to={`/${borders}`}>{borders}</Link>
                            </li>
                        ))}
                    </ul>
                </td>
            </tr>

            </tbody>
            </table>
        
        </div>
        )
    
    
    return (
        <div>
            {countries}
        </div>
    )
}
