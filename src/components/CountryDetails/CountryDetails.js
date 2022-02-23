import { Link, useParams } from 'react-router-dom'
import countriesArr from "../../countries.json"


function CountryDetails() {

    const { identification } = useParams()
    console.log(identification)
    const filtered = countriesArr.filter(country => country.alpha3Code == identification)
    // const mapped = countriesArr.map(country => country.alpha3Code == identification)
    console.log(countriesArr)
    console.log(filtered)
    // console.log(mapped)

    return (
        <>
            <p> holi</p>
            <p> esto sí que se imprime pero no hay manera de que me saque el array filterado, mapeado o con un if, ni tampoco por consola, cuando le pongo console.log y no puedo avanzar ya que no puedo visualizar el resultado :(</p>
        </>

        //     <div>
        //         {
        //             countriesArr.map(country => {

        //                 if (country.alpha3code === identification) {
        //                     return (
        //                         <div key={country.alpha3Code}>
        //                             <p> {country.name.common}</p>
        //                         </div>
        //                     )
        //                 }
        //             }

        //             )
        //         }

        //     </div>

    );
}

export default CountryDetails;