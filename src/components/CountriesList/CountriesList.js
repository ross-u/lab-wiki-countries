import { useEffect, useState } from "react";
import { Link } from "react-router-dom"


const CountriesList = ({ countries }) => {
    

    return (
        countries.map((thecountry) => {
            return (
                <div className="list" key={thecountry.alpha3Code} className="card">
                    <h3><Link to={`/detalles/${thecountry.alpha3Code}`}>{thecountry.name.official}</Link></h3>
                </div>
            )
        })
    )
}




export default CountriesList