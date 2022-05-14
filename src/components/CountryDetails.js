import { useParams } from 'react-router-dom'

const CountryDetails = (props) => {
const {id} = useParams()

const theCountries = props.


    return (
    <div>
        <h2>Country Details</h2>
        {theCountry[].name}
    </div>
)
}

export default CountryDetails