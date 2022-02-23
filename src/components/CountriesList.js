import {useState} from 'react'
import {Link} from 'react-router-dom'

function CountriesList ({countries}){

    const [countriesList, setCountriesList] = useState(countries)
    const [countriesListParty, setCountriesListParty] = useState(countries)
    
    return(
        <div className="row" >
            <div className="col-5" >
                <div className="list-group">
                {
                    countries.map(country => {
                        return (
                            <div key={country.alpha3Code} > 
                        
                                <Link to={`details/${country.alpha3Code}`} className="list-group-item list-group-item-action"> 
                                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} />
                                    <p>{country.name.common}</p>
                                </Link>
                            </div>
                        )
                    })
                }
                </div>      
            </div>      
        </div>      
    )

}

export default CountriesList