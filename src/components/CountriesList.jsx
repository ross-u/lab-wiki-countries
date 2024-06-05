import {Link} from "react-router-dom"

export default function CountriesList(props) {
    const {countriesData} = props

    return (
        <div className="col-5">
            <div className="list-group">
                {countriesData.map(country => {
                        return (
                            <Link key={country.alpha3Code} className="list-group-item list-group-item-action" to={"/"+ country.alpha3Code}>
                            <img src={"https:www.countryflags.io/"+country.alpha2Code+"/flat/32.png"} />
                                <p>{country.name}</p>
                            </Link> 

                        )
                    } )
                }
            </div>
        </div>
    )
}
