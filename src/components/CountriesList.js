import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from "react";
import { CountryItem } from './CountryItem';

export const CountriesList = (props) => {
    const [con, setcon] = useState([]);
    useEffect(() => {
        setcon(props.con);
    }, [props.con]);

    return (
        <div>
            <h1>Countries</h1>
            {props.con.map((c) => {
                return (
                    <div className="list-group" key={c.alpha2Code} >

                        <Link className="list-group-item" to={`/countries/${c.alpha2Code}`}>
                            <CountryItem country={c} />
                        </Link>

                    </div>
                );
            })}
        </div>
    );

}

export default CountriesList