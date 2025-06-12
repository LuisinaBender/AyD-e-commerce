import React, { useState } from 'react';
import '../css/Nav.css';
import CarWidget from './CarWidget';

    const NavBar = () => {
    const [mostrarMenu, setMostrarMenu] = useState(false);

    const toggleMenu = () => {
        setMostrarMenu(!mostrarMenu);
    };

    return (
        <nav className="navbar">
        <ul className="navbar__links">
            <li><a href="">Inicio</a></li>
            <li><a href="">Contacto</a></li>

            <li className="navbar__item--dropdown">
            <a href="#" onClick={toggleMenu}>Productos</a>
            {mostrarMenu && (
                <ul className="navbar__submenu">
                <li><a href="">Jarrones</a></li>
                <li><a href="">Masetas</a></li>
                <li><a href="">Porta Sahumerios</a></li>
                <li><a href="">Velas</a></li>
                </ul>
            )}
            </li>

            <li><a href="">Sobre Nosotros</a></li>
            <li><CarWidget /></li>
        </ul>
        </nav>
    );
    };

export default NavBar;
