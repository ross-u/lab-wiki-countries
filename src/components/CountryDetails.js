import React from 'react'
import { Link, useParams } from 'react-router-dom'

export const CountryDetails = (props) => {
  const {pais} = props
  console.log(pais)


    if(pais){
      return (
        <div class="col-7">
                <img src="https://restcountries.eu/data/fra.svg" alt="country flag"  className='ImgCoun'/>
                <h1>{pais.name.common}</h1>
                <table class="table">
                  <thead></thead>
                  <tbody>
                    <tr>
                      <td className='capital'>Capital</td>
                      <td>{pais.capital}</td>
                    </tr>
                    <tr>
                      <td>Area</td>
                      <td>
                        {pais.area}
                      </td>
                    </tr>
                    <tr>
                      <td>Borders</td>
                      <td>
                        <ul>
                          {pais.borders.map(border=>(
                            <Link to={`/${border}`}><li><p>{border}</p></li></Link>
                          ))}
                        </ul>  
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
      )
    } else{
      return(
        <></>
      )
    }

}