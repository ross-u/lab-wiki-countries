import { useParams } from "react-router-dom"
import { useState } from "react"

function CountryDetails({country}) {
    const { id } = useParams()

    const findElem = () => country.find(elem => {
        return elem.alpha3Code === id
    })

    const [detail, setDetail] = useState(findElem())

    return (
        <div>
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${detail.alpha2Code.toLowerCase()}.png`} />
                <h1>{detail.name.common}</h1>
                <br/><br/>
                <p>Capital {detail.capital}</p>
                <hr />
                <p>Area {detail.area} km2</p>
        </div>
    )
}

export default CountryDetails