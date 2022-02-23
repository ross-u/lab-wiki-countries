import axios from "axios"
import { useEffect, useState } from "react"
import {Link, useParams} from "react-router-dom"

const CountryDetails = () => {
    const {country_aplha} = useParams()
    console.log(country_aplha)

    const[oneCountry, setOneCountry] = useState([])

    useEffect(()=> {
        axios
        .get(`https://ih-countries-api.herokuapp.com/countries/${country_aplha}`)
        .then(response =>{
            setOneCountry(response.data)
        })
    })

    return (
        <h1>holi</h1>
        // <div class="col-7">
        //     <img src="https://restcountries.eu/data/fra.svg" alt="country flag" style="width: 300px" />
        //     <h1>France</h1>
        //     <table class="table">
        //         <thead></thead>
        //         <tbody>
        //             <tr>
        //                 <td style="width: 30%">Capital</td>
        //                 <td>Paris</td>
        //             </tr>
        //             <tr>
        //                 <td>Area</td>
        //                 <td>
        //                     551695 km <sup>2</sup>
        //                 </td>
        //             </tr>
        //             <tr>
        //                 <td>Borders</td>
        //                 <td>
        //                     <ul>

        //                     </ul>
        //                 </td>
        //             </tr>
        //         </tbody>
        //     </table>
        // </div>

    )
}

export default CountryDetails