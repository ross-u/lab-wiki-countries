import { Switch, Route, useParams } from 'react-router-dom';
import {useState, useEffect} from 'react'
export default function CountryDetails() {
    
    const { country } = useParams()
    let theCountry = country.charAt(0).toLowerCase() + country.slice(1)
    const [countryData, setCountryData] = useState({})
    console.log('line 6', theCountry)

    const getCountry = async () => {
        const response = await fetch(`https://restcountries.com/v3/name/peru`)
        setCountryData(response.data)
        console.log('line 14', countryData)
        console.log('line 13', response.body)
        
    }

    useEffect(() => {
        getCountry()
    }, [])

    return (
       <div>
           <h1>Details page</h1>
       </div>
    )
}
