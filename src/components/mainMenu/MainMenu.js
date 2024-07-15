import './MainMenu.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from "react";
import { useState } from "react";

export const MainMenu = () => {

    const[menuSelected, setMenuSelected] = useState('');

    return <header className="mainMenu">
        <nav>
            <a href='/store' onClick={() => setMenuSelected('store')} className={((menuSelected == 'store') ? 'selected' : '')}><FontAwesomeIcon icon="fa-solid fa-store" /> Tienda</a>
            <a href='/about' onClick={() => setMenuSelected('about')} className={((menuSelected == 'about') ? 'selected' : '')}><FontAwesomeIcon icon="fa-solid fa-shirt" /> Acerca de</a>
            <a href='/contact' onClick={() => setMenuSelected('contact')} className={((menuSelected == 'contact') ? 'selected' : '')}><FontAwesomeIcon icon="fa-solid fa-comments" /> Contacto</a>
        </nav>
        <h1>A L A M E D A</h1>
        <nav>
            <a href='/shopping-cart' onClick={() => setMenuSelected('shoppingCart')} className={((menuSelected == 'shoppingCart') ? 'selected' : '')}><FontAwesomeIcon icon="fa-solid fa-bag-shopping" /> Carrito de compras</a>
            <a href="https://facebook.com" target='_blank'><FontAwesomeIcon icon="fa-brands fa-square-facebook" /></a>
            <a href="https://instagram.com" target='_blank'><FontAwesomeIcon icon="fa-brands fa-instagram" /></a>
            <a href="https://twitter.com" target='_blank'><FontAwesomeIcon icon="fa-brands fa-twitter" /></a>
            <a href="https://tiktok.com" target='_blank'><FontAwesomeIcon icon="fa-brands fa-tiktok" /></a>
        </nav>
    </header>
}