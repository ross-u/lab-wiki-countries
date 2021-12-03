import "./App.css";
import Navbar from "./components/Navbar";
import CountriesDetails from "./components/CountriesDetails";
import CountriesList from "./components/CountriesList";
import {Route, Routes} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios"

function App() {

    const [countries, setCountries] = useState(null)

    useEffect(() => {
        axios.get("https://ih-countries-api.herokuapp.com/countries")
            .then(response => setCountries(response.data))
            .catch(err => console.log(err))
    }, [])

    if (!countries) return (<></>)
    return (
        <div className="App">

            <Navbar/>

            <div className="container">
                <div className="row">
                    <div className="col-5" style={{'max-height': '90vh', 'overflow': 'scroll'}}>
                        <div className="list-group">
                            {
                                countries.map(country => <CountriesList country={country}/>)
                            }
                        </div>
                    </div>
                    <div className="col-7">
                        <Routes>
                            <Route path="/:alpha3code" element={<CountriesDetails countries={countries}/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;