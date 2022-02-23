

import "./App.css"
import CountriesList from "./components/CountriesList/CountiresList"


import Navbar from "./components/Navbar/Navbar"



function App() {



  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">
          <CountriesList />

        </div>
      </div>
      
    </div>
  )
}
export default App


