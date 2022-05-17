import logo from './logo.svg';
import './App.css';
import {Routes,Route, BrowserRouter} from "react-router-dom"
import {CountriesList} from "./Components/CountriesList"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<CountriesList/>}/>
      <Route path='/:id' element={<CountriesList/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
