import { Link, useParams } from 'react-router-dom';

const capitalStyle = {
  width: '30%',
};

const imgStyle = {
  width: '100px',
};

function CountryDetails(props) {
  const { data } = props;
  const { alpha3Code } = useParams();
  const countryData = data.find((country) => {
    return country.alpha3Code === alpha3Code;
  });

  const imgLink = `https://flagpedia.net/data/flags/icon/72x54/${countryData.alpha2Code.toLowerCase()}.png`;

  function countryLink(countries) {
    return countries.borders.map((country) => {
      const linkTo = `/${country}`;
      return (
        <li key={country}>
          <Link to={linkTo}>{country}</Link>
        </li>
      );
    });
  }

  return (
    <div className="col-7">
      <img src={imgLink} alt="country flag" style={imgStyle} />
      <h1>{countryData.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={capitalStyle}>Capital</td>
            <td>{countryData.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {countryData.area} km <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>{countryLink(countryData)}</ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;
