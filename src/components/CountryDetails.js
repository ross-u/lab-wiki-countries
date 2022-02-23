import {Link, useParams} from 'react-router-dom'


function CountryDetails({ countries}) {

    const { country_id } = useParams()

    const countryCheck = ()=>{
       const a= countries.filter(code => {
           
            return code.alpha3Code === country_id
        })
        return a[0]
        
    }

    const countrySelected = countryCheck()

    return(
        <div>
            <div className="col-7">
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${countrySelected.alpha2Code.toLowerCase()}.png`} alt="country flag" />
                <h1>{countrySelected.name.common}</h1>
       
                <table className="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td>Capital</td>
                            <td>{countrySelected.capital}</td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>
                                {countrySelected.area} km <sup>2</sup>
                            </td>
                        </tr>
                        
                        <tr>
                            <td>Region</td>
                            <td>
                                {countrySelected.region}                            </td>
                        </tr>

                            
                           
                    </tbody>
                </table>
       
       
            
        </div>
        </div>
    )
}

export default CountryDetails