import { Link } from 'react-router-dom';

const style = {
  overflowY: 'scroll',
  maxHeight: '80vh',
  width: '40vw',
};

const CountriesList = ({ countries }) => {
  return (
    <div style={style}>
      {countries.map((country) => {
        return (
          <div key={country._id}>
            <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
            />
            <Link to={country.alpha3Code}>
              <p>{country.name.common}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
export default CountriesList;

// const CountriesList = (props) => {
//   const [countries, setcountries] = useState([]);

// const resultFromApi = async () => {
//     const { data } = await axios.get(
//         `https://ih-countries-api.herokuapp.com/countries`
//     );
//     setcountries (() => data);
// }
//   useEffect(() => {
//     axios
//       .get('https://ih-countries-api.herokuapp.com/countries')
//       .then((response) => {
//         setcountries(response.data);
//       })
//       .catch((e) => console.log('error getting countries list', e));
//   }, []);

//   return (
//     <div>
//       <h2>Countries List</h2>
//       {countries.map((element) => {
//         return (
//           <div key={element.id} className="box">
//             <h3>
//               <Link to={`${element.alpha3code}`}>{element.name.common}</Link>
//             </h3>
//           </div>
//         );
//       })}
//     </div>
//   );
// };
