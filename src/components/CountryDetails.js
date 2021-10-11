import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import countryList from '../countries.json';
import {Link} from 'react-router-dom'

export default function CountryDetails(props) {
  const { alpha3Code } = useParams(); //nos da el alpha3Code que queremos
  const [country, setCountry] = useState({});

  useEffect(() => { // trae la info del pais con el alfa3code
    const getResponse = async () => {
      console.log('entrando');
      //const res= await axios.get(`http://api.countrylayer.com/v2/alpha/${alpha3Code}?access_key=${process.env.REACT_APP_API_KEY_COUNTRY}`)
      //console.log(res.data)
      // const country=res.data
      const country = countryList.find((country) => {
        return country.alpha3Code === alpha3Code;
      });
      setCountry(country);
    };
    getResponse();
  }, [alpha3Code]); // variable que esta escuchando useEffect p c
  return (
    <div>
      <p>{country.name}</p>
      <img
        src={`https://www.countryflags.io/${country.alpha2Code}/flat/32.png`}
      />
      <p>Capital: {country.capital}</p>
      <p>Area:{country.area}km2</p>
    </div>
  );
}
