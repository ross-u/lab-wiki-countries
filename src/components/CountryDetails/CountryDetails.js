import { Link, useParams } from 'react-router-dom'
import countriesArr from "../../countries.json"


function CountryDetails() {

    const { identification } = useParams()
    console.log(identification)
    // const mapped = countriesArr.map(country => country.alpha3Code == identification)
    // console.log(mapped)
    console.log(countriesArr)


    const filtered = countriesArr.filter((country) => {
        return country.alpha3Code === identification
    })
    console.log(filtered)
    return (
        <>
            <p> holi</p>
            {/* <div>{filtered.name.official}</div> */}
            {/* <div>{filtered.name.common}</div> */}
        </>

    );
}

export default CountryDetails;