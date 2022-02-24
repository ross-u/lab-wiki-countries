import { React } from 'react';
import { NavLink } from 'react-router-dom';

const CountriesList = ({ countries }) => {

  return (
    <section>
      <div className="list-group">
        {countries.map((country) => {
          return (
            <NavLink
              key={country.alpha3Code}
              className="text-decoration-none cardCountries list-group-item d-flex flex-column justify-content-center align-items-center"
              to={`/${country.alpha3Code}`}
            >
                <img
                  src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                  alt="flag"
                />
                <p className='mb-0'>{country.name.common}</p>
            </NavLink>
          );
        })}
      </div>
    </section>
  );
};

export default CountriesList;
