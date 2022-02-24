import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react"

const CountryDetailes = ({ country }) => {
    console.log(country)

    const { alpha3Code } = useParams()

    return (
        < div className="container" >
            {
                country.map(elm => {
                    if (elm.alpha3Code === alpha3Code) {
                        return (
                            <div key={elm.alpha3Code}>
                                <p>{elm.name.common}</p>
                            </div>
                        )
                    }
                })
            }
        </div >
    )
}
export default CountryDetailes