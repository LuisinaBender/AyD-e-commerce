import React, { useState } from 'react';
import '../css/Nav.css';
import CarWidget from './CartWidget';
import { NavLink } from 'react-router-dom';

    const NavBar = () => {
    const [mostrarMenu, setMostrarMenu] = useState(false);

    const toggleMenu = () => {
        setMostrarMenu(!mostrarMenu);
    };

    return (
        <nav className="navbar">
        <ul className="navbar__links">
            <li><NavLink to="/">Inicio</NavLink></li>
            <li><NavLink to="">Contacto</NavLink></li>

            <li className="navbar__item--dropdown">
            <NavLink to="#" onClick={toggleMenu}>Productos</NavLink>
            {mostrarMenu && (
                <ul className="navbar__submenu">
                <li><NavLink to="category/Yeso">Yeso</NavLink></li>
                <li><NavLink to="category/Velas">Velas</NavLink></li>
                <li><NavLink to="category/Aromatizantes">Aromatizantes</NavLink></li>
                <li><NavLink to="category/Hogar Deco">Hogar Deco</NavLink></li>
                </ul>
            )}
            </li>

            <li><NavLink to="">Sobre Nosotros</NavLink></li>
            <li><CarWidget /></li>
        </ul>
        </nav>
    );
    };

export default NavBar;
