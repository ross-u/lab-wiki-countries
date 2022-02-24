import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import React from "react";
import countriesFromJson from '../countries.json';

function CountryDetails(){
   
const {country_id}=useParams()
    const [CountryD, setCountryD] = useState(countriesFromJson)
useEffect(()=>{
    setCountryD (CountryD.filter(elm=>country_id=== elm.alpha3Code))
},[]
)
// console.log(CountryD)
return(
    <div>
    <h1>hola soy un detail de  {CountryD[0].name.common} </h1>
         <p>{CountryD[0].capital}</p>
        <p>{CountryD[0].region}</p>
        <p>{CountryD[0].subregion}</p> 

</div>
)
}

export default CountryDetails