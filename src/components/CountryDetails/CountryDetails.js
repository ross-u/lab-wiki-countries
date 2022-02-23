import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const CountryDetails = () => {
    const { country_aplha } = useParams()

    const [fetching, setFetching] = useState(true)
    const [oneCountry, setOneCountry] = useState([])



    useEffect(() => {
        axios
            .get(`https://ih-countries-api.herokuapp.com/countries/${country_aplha}`)
            .then(response => {
                setOneCountry(response.data)
            })


    }, [country_aplha])

    console.log(oneCountry.name)


    

                return (

                    <>
                        <img src={`https://flagpedia.net/data/flags/icon/72x54/${oneCountry.alpha2Code}.png`} alt="country flag" />
                        <h1>Nombre del pais no accede jeje</h1>
                        <table class="table">
                            <thead></thead>
                            <tbody>
                                <tr>
                                    <td>Capital</td>
                                    <td>{oneCountry.capital}</td>
                                </tr>
                                <tr>
                                    <td>Area</td>
                                    <td>
                                        {oneCountry.area} km <sup>2</sup>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Borders</td>
                                    <td>
                                        <ul>
                                            {oneCountry.borders}
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </>
                )
           
   

 

}

export default CountryDetails