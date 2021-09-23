import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';


function CountryDetails(props) {
  
  const [countries, setcountries] = useState({
    name: '',
    alpha3Code: '',
    capital: '',
    area: '',
    flag: '',
    borders: [],
});

  useEffect(() => {
    const foundCountry = props.countries.filter((countryObj) => {
      return countryObj.alpha3Code === props.match.params.alpha3Code;
    })
    if (foundCountry) setcountries(foundCountry[0]);
  }, [props.countries, props.match.params.alpha3Code]);

const codeToName = (alpha3Code) =>{

    const foundCountry = props.countries.filter((countryObj)=>{
        return countryObj.alpha3Code === alpha3Code;
    })
    return foundCountry[0].name
}

return(
    <div>
        {countries &&(
            <div>
            <img src= {`https://web.archive.org/web/20210723151325/https://restcountries.eu/data/${countries.alpha3Code.toLowerCase()}.svg`} alt={countries.name} />
<h1>{countries.name}</h1>
            <div className="row">
                <div className="col-6">
                    <p>Capital</p>
                </div>
                <div className="col-6">
                    <p>{countries.capital}</p>
                </div>
            </div>
            <hr></hr>
            <div className="row">
                <div className="col-6">
                    <p>Area</p>
                </div>
                <div className="col-6">
                    <p>{countries.area}</p>
                </div>
            </div>
            <hr></hr>
            <div className="row">
                <div className="col-6">
                    <p>Borders</p>
                </div>

                <div className="col-6">
                    {countries.borders.map((alpha3Code) => {
                        console.log(alpha3Code)
                        return (
                            <Link to={`/countries/` + alpha3Code} className="link-style" >
                                <p>{codeToName(alpha3Code)}</p>
                            </Link>

                        );
                    })}
                </div>
            </div>

        </div>
      )}
    </div>
  )
}

export default CountryDetails;