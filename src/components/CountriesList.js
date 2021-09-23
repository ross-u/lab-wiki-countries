import { Link } from 'react-router-dom';

function CountryList(props) {
  return (
    <div class="container">
      <div style={{ maxHeight: '80vh', overflow: 'scroll' }}>
        {props.countries.map((country) => {
          return (
            <>
              <Link to={`/${country.alpha3Code}`} class="link">
                <div>
                  <img
                    src={`https://www.countryflags.io/${country.alpha2Code}/flat/64.png`}
                    class="flag"
                    alt="..."
                  />
                  <div class="card-body">
                    <p class="card-text">{country.name}</p>
                  </div>
                </div>
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default CountryList;
