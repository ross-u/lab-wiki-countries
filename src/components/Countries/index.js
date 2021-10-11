import React from 'react'
import CountriesList from './CountriesList'


function Countries(props) {
    return (
        <div className="flex">

            <CountriesList />

            {/* Contenido de las rutas */}
            { props.children  }

        </div>
    )
}

export default Countries
