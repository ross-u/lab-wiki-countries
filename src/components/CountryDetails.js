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
         <div className="col-7">
      {!foundCountry && <h3>Country not found!</h3>}

      {foundCountry && (
        <>
       <img src= {`https://www.countryflags.io/${foundCountry.alpha2Code}/flat/32.png`} alt={foundCountry.name}/>
          <h1>{foundCountry.name}</h1>
          <h3>Capital: {foundCountry.capital}</h3>
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
                            {country} <br/></Link> 
                         );
                     })}
                   </td>
                 </tr>
                 </tbody>
                 </table>
        
          <p>{foundCountry.region}</p>
          <Link to="/">Back</Link>
        </>
      )}
    </div> 
    )
}

export default CountryDetails

