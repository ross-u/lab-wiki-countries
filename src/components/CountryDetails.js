import CountL from "../countries.json"
import { useParams, Link } from 'react-router-dom'
import { CountryItem } from './CountryItem';
export const CountryDetails = (props) => {
  const { id } = useParams();
  const country = CountL.find((c) => {   //  <== ADD
    return c.alpha2Code === id;
  });
  const countryByAlpha3Code = code => CountL.find(c => c.alpha3Code === code)

  return (
    <div className="row">
      {country && (
        <div className="col-12">
          <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} />
          <h5 className="col-12" >
            
            {country.name.common}
            <table>
                        <tbody>
                          <tr>
                            <td>Capital:</td>
                            <td>{country.capital}</td>

                          </tr>
                          <tr>
                            <td>Area:</td>
                            <td>{country.area}</td>
                          </tr>
                          <tr>
                            <td>Borders:</td>
                          </tr>
                        </tbody>
                      </table>
              {
                country.borders.map(
                  border => {
                    return (
                      <table>
                        <tbody>
                          <tr>
                            <td><Link className="list-group-item" to={`/countries/${countryByAlpha3Code(border).alpha2Code}`}>{countryByAlpha3Code(border).name.common}</Link></td>
                          </tr>
                        </tbody>
                      </table>
                    )
                  }
                )
              }

          </h5>

        </div>
      )}

    </div>
  )
}

export default CountryDetails;
