import React from 'react'
import CountriesList from './CountriesList'


export default function Countries(props) {
    return (
        <div className="flex">

            <CountriesList />
            {/*Contenido de las rutas: SECCIÓN DINÁMICA */}
            {props.children}
        </div>
    )
}