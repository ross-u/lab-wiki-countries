import countries from '../countries.json';
import { Link } from 'react-router-dom';


function CountryDetails(props) {
  //console.log("props: ", props);

  const foundCountry = countries.find((countryObj) => {
    return countryObj.alpha3Code === props.match.params.country;
  });

  function Borders(arr) {
    let countriesArray = [];
    for (let i = 0; i < arr.length; i++) {
      let foundBorder = countries.find(
        (country) => country.alpha3Code === arr[i]
      );
      countriesArray.push(foundBorder);
    }
    return countriesArray;
  }

  let bordersArray = foundCountry.borders;

  let borderList = Borders(bordersArray);

  console.log('foundCountry: ', foundCountry);

  return (
    <div class="col-7">
      <img
        src={`https://www.countryflags.io/${foundCountry.alpha2Code}/flat/32.png`}
        alt="country flag"
      />
      <h1>{foundCountry.name}</h1>
      <table class="table">
        <thead></thead>
        <tbody>
          <tr>
            <td>Capital</td>
            <td>{foundCountry.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {foundCountry.area} km <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {borderList.map((border) => (
                  <li>
                    <Link to={`/countries/${border.alpha3Code}`}>{border.name}</Link> 
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;
