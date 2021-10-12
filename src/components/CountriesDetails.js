import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import countriesJSON from "../countries.json"
import { Link } from "react-router-dom"


function CountriesDetails() {

  const [countries, setCountries] = useState(countriesJSON);
  const [countryFilter, setCountryFilter] = useState({});
  const [borders, setBorders] = useState([])
  // console.log(countries);
  const countryParams = useParams();
  const { country } = countryParams

  console.log(country);

  useEffect(() => {
    const getResponse = async () => {
      const res = countries.filter((e) => {
        if (e.alpha3Code === country) {
          return e;
        }

      })
      // const bordersArr = res[0].borders.filter((border) => {
      //   return countries.filter((country) => {
      //     if (country.alpha3Code === border) {
      //       return country
      //     }
      //   })
      // })
      const bordersArr = countries.filter((e) => {
        for (let i = 0; i < res[0].borders.length; i++) {
          if (e.alpha3Code === res[0].borders[i]) {
            return e;
          }
        }
      })

      setCountryFilter(res[0]);
      setBorders(bordersArr);

    }
    getResponse();

  }, [country])

  console.log(countryFilter);
  console.log(borders);


  return (
    <>
      <div>
        <img src={`https://www.countryflags.io/${countryFilter.alpha2Code}/flat/32.png`} alt=""></img>
        <p><strong>{countryFilter.name}</strong></p>
        <p><strong>Capital: </strong>{countryFilter.capital}</p>
        <p><strong>Area: </strong>{countryFilter.area} km<sup>2</sup></p>
        <p><strong>Borders:</strong></p>
        <ul>
          {borders.map((e) => {
            return (
              <li>
                <Link to={`/${e.alpha3Code}`}>
                  <p>{e.name}</p>
                </Link>
              </li>)
          })}
        </ul>
      </div>
    </>
  )
}

export default CountriesDetails
