import './CountriesList.css'
import { useState, useEffect } from "react"
import countries from './../../countries.json'
import {Link}  from "react-router-dom"
import axios  from 'axios'


function CountriesList() {


    const [fetching, setFetching] = useState(true)

    const [countriesList, setCountriesList] = useState([])

    useEffect(() => {
        axios
            .get('https://ih-countries-api.herokuapp.com/countries')
            .then(response => {
                console.log(response)
                setCountriesList(response.data)
                setFetching(false)

            })
    }, [])



    return (
        <>
            <h1>Countries</h1>

            

           <div className='list'>
                {fetching && <p>Cargando Paises ...</p>}

               {
                   countriesList.map((elm, idx) =>{
                       return (
                           <div key={elm.alpha3Code} className='countrieCard'>
               
                               <img src={`https://flagpedia.net/data/flags/icon/72x54/${elm.alpha2Code.toLowerCase()}.png`}></img>
                               <p>{elm.name.common}</p>
                               <Link to={`/details/${elm.alpha3Code}`}>Details</Link>
               
                           </div>
                       )
                   })
               }
           </div>


        </>
    )
}

export default CountriesList;


