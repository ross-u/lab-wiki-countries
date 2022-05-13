import { Link } from "react-router-dom"

function CountriesList(props){

    

    return(
        <div className="col-5 " style={{maxheight: "90vh", overflow: "scroll"}}>
            <div className="list-group">
                {props.countries.map((country) => {
                    const {alpha2Code, alpha3Code, name} = country

                     //console.log(alpha2Code, name) 

                    return (
                        <Link key={alpha3Code} to={`/${alpha3Code}`} className="list-group-item list-group-item-action">
                            <img src={`https://flagpedia.net/data/flags/icon/72x54/${alpha2Code.toLowerCase()}.png`} alt="" />
                            <p>{name.common}</p>
                        </Link>
                    )

                })}


            </div>
            
        </div>
    )
}

export default CountriesList