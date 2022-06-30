import React from 'react';
import './CountriesList.css';
import { Link } from 'react-router-dom';


const CountriesList = ({ countries }) => {
  
    const countryList = countries.map((oneCountry) => (
            
            <Link 
             key={oneCountry.alpha3Code}
             to={`/${oneCountry.alpha3Code}`}
             className="country-name  "
            >  {
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${oneCountry.alpha2Code.toLowerCase()}.png`}  alt={oneCountry.name.official} />

              }
               {oneCountry.name.common}
            </Link>
    ));
      return (
          <>
            <div className="container">
             <div className="row">
                <div
                    className="col-5"
                    style={{ maxHeight: `80vh`, overflow: 'scroll' }}
                >
                    <div className="list-group" style={{fontSize: '1rem'}}>{countryList}</div>
                </div>
             </div>

            </div>

          </>
  );
};

export default CountriesList;
