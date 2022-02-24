import { useParams } from 'react-router-dom'

function CountriesDetails({countries}) {

    const { id } = useParams()

    const theCountry = countries.filter(country => id === country.alpha3Code)

    return (
        <div>
            
            <h2>Country Details</h2>
            {theCountry[0].name.official}
            <br/>
            {theCountry[0].capital}
            <br />
            {theCountry[0].borders.map(border => {
                return (
                    <div key={border} className="border">
                        {border}
                    </div>
                )
            
            })}
                
        </div>
    )
}

export default CountriesDetails