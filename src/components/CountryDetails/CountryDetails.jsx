import React from 'react'
import './CountryDetails.css';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import axios from 'axios';
const CountryDetails = ({countries}) => {

//When using useParams() it is necessary to match the estructure to the path
    const { alpha3Code }= useParams();

// Fetching One Country from props:
    const foundCountry = countries.find(
        (country) => country.alpha3Code == alpha3Code
    );
    const {
        name: { official },
        alpha2Code,
        capital,
        area,
        borders,
    } = foundCountry

// Fetching one Country from API:

    const [ country, setCountry] = useState({
        name: '',
        alpha2Code: '',
        capital: [],
        area: 0,
        borders: [],
    });

    useEffect(() => {
      async function fetOneCountry(){
        try{
            const response =await axios.get(
                ` https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`
            );
            const {name, alpha2Code, capital, area, borders} = response.data;

            setCountry({
                name: name.common,
                alpha2Code: alpha2Code,
                capital: capital,
                area: area,
                borders: borders,
            });
        }
        catch (err){
            console.log(err);
        }
      }
      fetOneCountry();  
    },[alpha3Code])

    const listBorders = borders.map((border)=>(    
        <li key={alpha3Code}>
        <Link className='link-text'  to={`/${border}`}>
        {countries.find((country)=> country.alpha3Code === border).name.common}
        </Link>
        </li>         
        ));

    if(!country){
        return 'Border name not found'
    }else{

        return (
            <div className='col-7'>
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${alpha2Code.toLowerCase()}.png`} alt="country flag" style={{width: "55%"}}/>
            <h1>{official}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width:" 30%"}}>Capital:</td>
                  <td>{capital}</td>
                </tr>
                <tr>
                  <td>Area:</td>
                  <td>
                    {area} km <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders:</td>
                  <td>
                    <ul>
                    {listBorders}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
    </div>
  )
}
}

export default CountryDetails