import "./App.css";
import Navbar from "./components/Navbar";
import CountriesDetails from "./components/CountriesDetails";
import CountriesList from "./components/CountriesList";
import countries from "./countries.json"
import {Route, Routes} from "react-router-dom";

function App() {
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
                            <Route path="/:alpha3code" element={<CountriesDetails/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;