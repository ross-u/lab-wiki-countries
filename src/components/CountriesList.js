import ListGroup from 'react-bootstrap/ListGroup';

export const CountriesList = (props) => {
  const { countries } = props;

  return (
    <ListGroup>
      {countries.map((country) => {
        return (
          <div key={country.alpha3Code}>
            <ListGroup.Item action href={`/#${country.alpha3Code}`}>
              <img
                src={`https://www.countryflags.io/${country.alpha2Code}/flat/64.png`}
                alt={country.name}
              />
              <p>{country.name}</p>
            </ListGroup.Item>
          </div>
        );
      })}
    </ListGroup>
  );
};
