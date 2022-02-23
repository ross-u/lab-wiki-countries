import { Link } from 'react-router-dom'


function CountriesList({ theCountries }) {


    return (

        <section>
            {
                theCountries.map(elm => {
                    return (
                        <div key={elm.alpha3Code}>
                            <Link to={`/listado/` + elm.alpha3Code}>{elm.name.official}</Link>
                        </div>
                    )
                })
            }
        </section>
    )
}

export default CountriesList