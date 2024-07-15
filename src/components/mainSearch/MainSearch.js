import './MainSearch.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from "react";

export const MainSearch = () => {

    function mainSearch(event) {
        event.preventDefault();
        const mainSearch = event.target.mainSearch.value;
        if (mainSearch != '') {
            alert('Acción no disponible por el momento. Estamos trabajando en esto. Tu acción fue: Búsqueda de ' + mainSearch + '.');
        } else {
            alert('Primero ingresa una búsqueda.');
        }
        event.target.mainSearch.value = '';
    }

    return <form className='mainSearch' onSubmit={mainSearch}>
        <input type='text' name='mainSearch' placeholder='Escribe tu búsqueda...' />
        <button><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> Buscar</button>
    </form>
}