import { useState, useEffect } from 'react';
import { Link } from "react-router-dom"; 


function CountryDetails(props) {
    //console.log(props.match.params.alpha3Code)
  
    const [countries, setCountries] = useState({
        name:'',
        alpha3Code:"",
        capital: '',
		area: '',
		flag: '',
		borders: []
     });

    useEffect(() => {
        const foundCountry  = props.countries.filter((countryObj) => {
            return countryObj.alpha3Code === props.match.params.alpha3Code;
        })

        if (foundCountry) setCountries(foundCountry[0]);
        
    }, [props.countries, props.match.params.alpha3Code]);

    const codeToName = (element)=>{
        const foundCountry  = props.countries.filter((countryObj) => {
            return countryObj.alpha3Code === element;
        })
        return foundCountry[0].name
    }
    
    //console.log(countries)
  return (
    <div>
      {countries && (
        <div>
            <img src= {`https://web.archive.org/web/20210723151325/https://restcountries.eu/data/${countries.alpha3Code.toLowerCase()}.svg`} alt=""/>
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
                    {countries.borders.map((element) => {
                        console.log(element)
                        return (
                            <Link to={`/countries/` + element} className="link-style" >
                                <p>{codeToName(element)}</p>
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