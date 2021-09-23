import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import countriesData from '../countries.json'


function CountryDetails(props){
    const [foundCountry, setFoundCountry] = useState(null);
    
    useEffect(()=>{
        const country = countriesData.find((countryObj)=>{
            return countryObj.alpha3Code === props.match.params.countryAlpha3Code
        })

        if(country) setFoundCountry(country);

    }, [props.match.params.countryAlpha3Code]);

    return(
         <div className="col-7 pt-2 text-center">
      {!foundCountry && <h3>Country not found!</h3>}

      {foundCountry && (
        <>
       <img className="w-50"src= {`https://web.archive.org/web/20210722165317/https://restcountries.eu/data/${foundCountry.alpha3Code.toLowerCase()}.svg`} alt={foundCountry.name}/>
          <h1>{foundCountry.name}</h1>
          <table class="table">
               <thead></thead>
               <tbody>
                 <tr>
                   <td className="w-30">Capital</td>
                   <td>{foundCountry.capital}</td>
                 </tr>
                 <tr>
                   <td>Area</td>
                   <td>
                   {foundCountry.area} km <sup>2</sup>
                   </td>
                 </tr>
                 <tr>
                   <td>Borders</td>
                   <td>
                     {foundCountry.borders.map ((country)=>{
                         return (
                             <Link to={`/${country}`}>
                                 {/* SHOW NAME INSTEAD OF ALPHA CODE */}
                                 {countriesData.map((country2)=>{
                                     return(
                                         <>
                                         {country2.alpha3Code===country && <p>{country2.name}</p>}
                                        </> 
                                     )})}
                             </Link> 
                         );
                     })}
                   </td>
                 </tr>
                 </tbody>
                 </table>
        
          <p>{foundCountry.region}</p>
        </>
      )}
    </div> 
    )
}

export default CountryDetails

