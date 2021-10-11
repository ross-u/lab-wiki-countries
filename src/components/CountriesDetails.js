import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import countriesJSON from "../countries.json"

function CountriesDetails() {

  const [countries, setCountries] = useState(countriesJSON);
  const [countryFilter, setCountryFilter] = useState([]);
  // console.log(countries);
  const countryParams = useParams();
  const { country } = countryParams

  useEffect(() => {
    const getResponse = async () => {
      const res = countries.filter((e) => {
        if (e.alpha3Code === country) {
          return e;
        }

      })
      setCountryFilter(res);
    }
    getResponse();
  }, [])

  console.log(countryFilter);

  // setCountryFilter([...filter])

  return (
    <>
      <div>

        {/* {countries.filter((e) => {

          if (e.alpha3Code === country) {

            return (
              <div>
                <img src={`https://www.countryflags.io/${e.alpha2Code}/flat/32.png`} ></img>
              </div>

            )
          }
        })} */}
      </div>
    </>
  )
}

export default CountriesDetails
