import React from 'react'
import { Link } from "react-router-dom"

function CountriesList(props) {
  const { countries, children } = props;
  // console.log(countries);

  return (
    <div className="countries" style={{ width: "20%" }}>
      <ul>

        {countries.map((e, index) => {
          return (
            <Link to={`/${e.alpha3Code}`}>
              <li key={index}>
                <img src={`https://www.countryflags.io/${e.alpha2Code}/flat/32.png`} alt="" />
                <p>{e.name}</p>
              </li>
            </Link>
          )
        })}
      </ul>

      {children}
    </div>
  )
}

export default CountriesList
