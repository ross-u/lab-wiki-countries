import { Link } from 'react-router-dom';

function CountriesList(props) {
  const countries = props.countryData;
  // console.log(countries);
  return (
    <div>
    <div class="country-scroll">
      {countries.map((country) => {
        return (
              <div class="col-5">
                <div class="list-group">
                  <ul>
                    <Link to={`/${country.alpha3Code}`} class="list-group-item list-group-item-action">
                      <p>{country.name}</p>
                      <img
                        src={`https://www.countryflags.io/${country.alpha2Code}/shiny/32.png`}
                        alt={country.name}
                      />
                    </Link>
                  </ul>
                </div>
              </div>
        );
      })}
      </div>
    </div>
  );
}

export default CountriesList;
