import './CountriesList.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const CountriesList = ({ countries }) => {

    // const [countriesList, setCountriesList] = useState([])

    // useEffect(() => {
    //     setCountriesList(countries)
    // }, [countriesList])                 // no entiendo por qué [] no funciona

    return (
        <section className='col-5'>
            <h1>Lista de países</h1>

            {
                countries.map(countrie => {
                    return (
                        <div key={countrie.alpha3Code}>
                            <div className="list-group">
                                <Link to={`/${countrie.alpha3Code}`} className="list-group-item list-group-item-action">
                                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${countrie.alpha2Code.toLowerCase()}.png`} alt='flag' />
                                    <p>{countrie.name.common}</p>
                                </Link>
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}

export default CountriesList