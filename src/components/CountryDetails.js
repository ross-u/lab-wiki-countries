import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import countriesData from './../countries.json';

function CountryDetails(props) {
    const [foundCountry, setFoundCountry] = useState(null);

//console.log(props.match.params.id);

    useEffect(() => {
        const oneCountry = countriesData.find((country) => {
            return country.alpha3Code === props.match.params.id;
            
        })

      //  console.log(oneCountry)

        if (oneCountry) setFoundCountry(oneCountry);

       // console.log(foundCountry)
        
    }, [props.match.params.id]);

//console.log(foundCountry)
        


  const BordersCountries = (id) => {
     console.log(id);
    const borderToCountry = countriesData.filter((oneCountry) => {
      //   console.log(oneCountry);
      return oneCountry.alpha3Code === id;
    });
    return borderToCountry[0].name;
  };

  
  return (
        
    <div class="allCountryDetails">
      <h1>Country Details</h1>
      {!foundCountry && <h3>Project not found!</h3>}

      {foundCountry && (
              
        <>
          <h2>Pais: {foundCountry.name}</h2>
          <h3>Capital: {foundCountry.capital}</h3>
          <p>Area: {foundCountry.area}</p>
          <p>Borders:{foundCountry.borders.map((id)=>{
                  
                  return  (

                <Link to={`/projects/${id}`} class="link">
                  <p>{BordersCountries(id)}</p>
                </Link>
              )

          })}</p>
        </>
      )}
    </div>
  )
}

export default CountryDetails;