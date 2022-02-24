import React from "react";
import { Link, Route } from "react-router-dom";

function CountriesList({ countries }) {

    const iteraCountry = (countries2) => countries2.map(item => 
        <div key={item.alpha3Code}>
         <Link to ={`/CountryDetails/${item.alpha3Code}`} >{item.name.common}
         </Link>
         </div>)
    return (
        <>
            <h1>Hola soy Countries List</h1>
            {iteraCountry(countries)}
        
        </>
    )

}

export default CountriesList