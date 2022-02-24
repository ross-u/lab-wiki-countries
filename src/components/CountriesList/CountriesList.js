import { Link } from "react-router-dom";

function CountriesList({countries}) {

    return (
        <div>
            <h2>Countries2</h2>
            <hr />

            {countries.map(country => {
                return (
                    <div key={country.alpha3Code} className="country">
                        <h3>{country.name.official}</h3>
                
                        <Link to={`/details/${country.alpha3Code}`}> {country.name.official}</Link>

                        <hr />
                    </div>
                )
            })}
        </div>
    )
}

export default CountriesList