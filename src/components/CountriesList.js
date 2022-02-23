
import { Link } from "react-router-dom";  



const CountriesList = ({countries}) => {






    return (<>

{countries.map((country) => {
    return <div>
    
      <Link to={"/countries/" + country.alpha3Code}>{country.name.common}</Link>     
    
   
    
    
    </div>

})}



    </>)
}

export default CountriesList;