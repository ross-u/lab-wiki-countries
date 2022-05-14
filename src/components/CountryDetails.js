import { useParams } from 'react-router-dom'

const CountryDetails = (props) => {

const {id} = useParams()

const theCountries = props.paises.filter(country => id === country.alpha3Code)

    return (
        <div>
            <h2>Country Details</h2>
            {theCountries[0].name.official}
            <br/>
            {theCountries[0].capital}
            <br />
            {theCountries[0].borders.map(border => {
                return (
                    <div key={border} className="border">
                        {border}
                    </div>
                )
            
            })}
        </div>
            
)
}

export default CountryDetails