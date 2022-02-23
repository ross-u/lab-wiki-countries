import countries from '../countries.json'
import { useParams, Link } from 'react-router-dom'



const CountryDetails = () => {
const {id} = useParams()
console.log(id)

const arr = countries.filter((country) => {
    return country.alpha3Code === id
})










    return (<>

<div><img src={"https://flagpedia.net/data/flags/icon/72x54/"+arr[0].alpha2Code.toLowerCase()+".png"}></img></div>
<div>{arr[0].name.common}</div>
<div>{arr[0].capital}</div>
<div>{arr[0].area + " km cuadrados"}</div>



    </>)
}

export default CountryDetails;

