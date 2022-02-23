import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

const CountryDetails = ({ countries }) => {
    const [theCountries, setTheCountries] = useState(countries);

    useEffect(() => {
        axios
            .get('https://ih-countries-api.herokuapp.com/countries/' + country_id)
            .then((response) => {
                setTheCountries(response.data);
                console.log(response.data)
            })
    }, [])

    const { country_id } = useParams()

    let filteredCountry = countries.filter(elm => elm.alpha3Code === country_id)

    return (
        <section className="details">
            <img src="" alt="flag"></img>
            <h2>{filteredCountry[0].name.official}</h2>
            <p>Capital:{filteredCountry[0].capital} </p>
            <>Borders:
                {filteredCountry[0].borders.map((border) => <ul><li> {border} </li></ul>)}

            </>
        </section>
    )
}

export default CountryDetails