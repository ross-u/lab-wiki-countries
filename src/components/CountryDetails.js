import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function CountryDetails(props) {
  const { id } = useParams();

  const [foundCountry, setFoundCountry] = useState(null);

  useEffect(() => {
    const oneCountry = props.countries.find((country) => {
      return country.alpha3Code === id;
    });
    if (oneCountry) {
      setFoundCountry(oneCountry);
    }
  }, [id]);

  // to get the name of the country insted of the id

  const codeToName = (id) => {
    // console.log(id);
    const countryToName = props.countries.filter((oneCountry) => {
      //   console.log(oneCountry);
      return oneCountry.alpha3Code === id;
    });
    return countryToName[0].name;
  };

  return (
    <div>
      {!foundCountry && <p>Country not found</p>}

      {foundCountry && (
        <>
          <img
            src={`https://www.countryflags.io/${foundCountry.alpha2Code}/flat/64.png`}
            class="flag"
            alt="..."
          />
          <h3>{foundCountry.name}</h3>
          <p>Capital: {foundCountry.capital}</p>
          <p>Area: {foundCountry.area}</p>
          <p>Borders:</p>
          <div>
            {foundCountry.borders.map((id) => {
              return (
                <Link to={`/${id}`} class="link">
                  <p>{codeToName(id)}</p>
                </Link>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default CountryDetails;
