import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CountriesList (props){
    const [countriesList, setCountriesList] = useState([]);

    useEffect(()=>{
        setCountriesList(props.countries);
    }, [props.countries]);

    return (
        <div className="col-5 scroll">
            <h3>Country List</h3>
            <div className="list-group text-center">
      {countriesList.map((country) => {
        return (
              <Link key={country.alpha3Code} to={`/${country.alpha3Code}`}> 
          <div  className="list-group-item list-group-item-action">
              <img src= {`https://www.countryflags.io/${country.alpha2Code}/flat/32.png`} alt={country.name}/>
              <br/>
                {country.name} 
            
            </div>
              </Link>
        );
    })}
    </div>
    </div>
    )
}

export default CountriesList;