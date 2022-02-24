
import countriesArr from "../../countries.json"
import { useState } from 'react'
import { Link } from 'react-router-dom'

function CountriesList() {
    const [countries, setCountries] = useState(countriesArr);


    return (
        <div className="container">
            <div className="row">
                <div className="col-5">
                    <div className="list-group">
                        <h2>Countries List</h2>
                        <hr />
                        {countriesArr.map(elm => {
                            return (
                                <div key={elm.alpha2Code}>
                                    <h3>{elm.name.common}</h3>
                                    <Link to={`/countries/${elm.alpha2Code}`}>Check Country</Link>
                                    <hr />
                                </div>
                            );
                        })}


                    </div>
                </div>
            </div>
        </div>


    )

}

export default CountriesList;