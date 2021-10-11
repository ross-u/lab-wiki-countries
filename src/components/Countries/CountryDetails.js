import axios from 'axios';
import React, { useEffect } from 'react';

//useParams

const CountryDetails = () => {
    useEffect(() => {
        const getCountry = async () => {
            const res = await axios.get(
                `http://api.countrylayer.com/v2/alpha/${}?access_key=${process.env.REACT_APP_COUNTRIES}`
            );
        };

        getCountry();
    }, []);

    return <div>Welcome to Details</div>;
};

export default CountryDetails;