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
                <li><a href="">Alternador</a></li>
                <li><a href="">Bobina de Arranque</a></li>
                <li><a href="">Bobina de Ignicion</a></li>
                <li><a href="">Inyectores</a></li>
                <li><a href="">Motor de Arranque</a></li>
                <li><a href="">Polea de Alternador</a></li>
                <li><a href="">Sensor ABS</a></li>
                <li><a href="">Selenoide de Pare</a></li>
                <li><a href="">Tapas de Moldes de Combustible</a></li>

                </ul>
            )}
            </li>

            <li><a href="">Puntos de Ventas</a></li>
            <li><CarWidget /></li>
        </ul>
        </nav>
    );
    };

export default NavBar;
