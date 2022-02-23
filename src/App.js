import { Route, Routes } from 'react-router-dom';
import './App.css'
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';
import Navbar from './components/Navbar/Navbar';
import countriesFromJSON from './countries.json'

function App() {
    return (
        <div className="App">
            <Navbar />
            <div className="container">
                <div className='row'>
                    <div className='col-4'>
                        <CountriesList countries={countriesFromJSON} />
                    </div>
                    <div className='col-8'>
                        <Routes>
                            <Route element={<CountryDetails countries={countriesFromJSON} />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;