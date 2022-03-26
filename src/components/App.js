import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './Navbar';
import CountriesList from './CountriesList';
import CountryDetails from './CountryDetails';

function App() {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // O React proíbe que as callbacks de efeito (o primeiro argumento do useEffect) sejam assíncronas, portanto, precisamos definir uma função async dentro da callback e invocá-la imediatamente.
    async function fetchCountries() {
      try {
        setLoading(true);
        const response = await axios.get(
          'https://ih-countries-api.herokuapp.com/countries'
        );

        setState([...response.data]);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
    fetchCountries();
  }, []);

  // // Solicitamos a informação para o servidor assim que o componente é renderizados
  // useEffect(() => {
  //   setLoading(true);

  //   // O get recebe a URL do recurso da API que estamos solicitando
  //   axios
  //     .get('https://ih-countries-api.herokuapp.com/countries')
  //     .then((response) => {
  //       // Quando a API terminar de responder, atualizamos o state com o que recebemos de resposta
  //       setState([...response.data]);
  //       setLoading(false);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          {loading ? (
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            <CountriesList countries={state} />
          )}

          <Routes>
            <Route
              path="/:alpha3Code"
              element={<CountryDetails countries={state} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
