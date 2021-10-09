import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import countriesJSON from './../countries.json';

export default function CountryDetails() {
  //Obtenemos el parametro de URL
  const countries = [...countriesJSON];
  const getCCA3 = useParams();

  const { cca3 } = getCCA3;
  const [borders, setBorders] = useState([]);
  //Estado local para guardar la info que necesitamos
  const paisValores = countries.filter((e) => {
    return e.cca3 === cca3;
  });

  return (
    <div>
      <h1>Detalles</h1>
      <h1> {paisValores[0].name.common}</h1>
      <img
        src={`https://www.countryflags.io/${paisValores[0].cca2}/flat/32.png `}
      />
      <h2> Capital : {paisValores[0].capital}</h2>
      <h2> Borders</h2>

      {paisValores[0].borders.length == 0 ? (
        <h3>No tiene la info escoge otro pais</h3>
      ) : (
        <ul>
          {paisValores[0].borders.map((el, i) => {
            return (
              <li>
                <Link to={`/country/${el}`} key={`${i}`}>
                  {el}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
