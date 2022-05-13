import React, { Fragment, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {Navbar} from "./Navbar"
import {CountryDetails} from "./CountryDetails"


export const CountriesList = () => {
    const [paises,setPaises] = useState()
    const [pais, setPais]= useState()
    const {id} = useParams()
    

    useEffect(()=>{
        fetch("https://ih-countries-api.herokuapp.com/countries")
        .then(respuesta =>respuesta.json())
         .then((paises)=>setPaises(paises))
         .catch(error=>console.log(error))

         if(id){
          const Pais = paises.filter(pais=>pais.alpha3Code === id)
          console.log(Pais)
          setPais(Pais[0])
      }

    },[id])
    


  return (
    <Fragment>
        <Navbar/>
        <div>
      <div class="container">
        <div class="row">
          <div class="col-5 Clase1"  >
            <div class="list-group">
                {paises ? 
                paises.map(pais=>(
                    <Link key={pais._id} classNAme="list-group-item list-group-item-action"  style={{"display":"flex","justifyContent":"center","flexDirection":"column","textAlign":"center"}}  to={`/${pais.alpha3Code}`}>
                        <img src="https://flagpedia.net/data/flags/icon/72x54/aw.png" style={{"width":"100px","display":"flex","justifyContent":"center","margin":"0 140.5px"}} alt='logo'/>
                        <p>{pais.name.common}</p>
                    </Link>
                )) : <></>}
            
            </div>
          </div>
          <CountryDetails pais={pais}/>
        </div>
      </div>
    </div>
    </Fragment>
  )
}
