import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const style = {
  position: 'fixed',
  top: '10%',
  left: '70%',
  border: '2px solid black',
};

const ContryDetails = ({ countries }) => {
  const { countryId } = useParams();
  const [selectedCountry, setSelectedCountry] = useState(null);

  const findCountry = () => {
    setSelectedCountry(() =>
      countries.find((country) => country.alpha3Code === countryId)
    );
  };

  const findBorderCountriesNames = (border) => {
    return countries.find((country) => country.alpha3Code === border);
  };

  useEffect(() => {
    findCountry();
  }, [countryId]);

  return (
    <div style={style}>
      {selectedCountry && (
        <div>
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${selectedCountry.alpha2Code.toLowerCase()}.png`}
          />
          <p>Name:{selectedCountry.name.common} </p>

          <ul>
            {selectedCountry.borders.map((border) => {
              const borderCountry = findBorderCountriesNames(border);
              return (
                <Link to={`/${border}`}>
                  <li>{borderCountry.name.common}</li>
                </Link>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
export default ContryDetails;

// const CountryDetails = () => {
//   const { countryId } = useParams();
//   const [countryData, setCountryData] = useState([]);

//   const getCountryDetails = async () => {
//     const { data } = await axios.get(
//       `https://ih-countries-api.herokuapp.com/${countryId}`
//     );
//     setCountryData(() => data);
//   };

//   useEffect(() => {
//     try {
//       getCountryDetails();
//     } catch (error) {
//       console.error(error);
//     }
//   }, []);

//   console.log(countryData);
//   return (
//     <div>
//       <p></p>
//       CountryDetails
//     </div>
//   );
// };
