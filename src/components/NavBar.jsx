import React, { useState } from 'react';
import '../css/Nav.css';
import CarWidget from './CartWidget';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const [mostrarMenu, setMostrarMenu] = useState(false);
    const [menuAbierto, setMenuAbierto] = useState(false); 

    const handleSubmenuClick = () => {
        setMostrarMenu(false);
        setMenuAbierto(false); // Opcional: cerrar menú móvil al seleccionar opción
    };

    const toggleMenu = () => {
        setMostrarMenu(!mostrarMenu);
    };

    const toggleMobileMenu = () => {
        setMenuAbierto(!menuAbierto);
    };

    return (
        <nav className="navbar">

        <div className="navbar__toggle" onClick={toggleMobileMenu}>
            ☰
        </div>

        <ul className={`navbar__links ${menuAbierto ? 'active' : ''}`}>
            <li><NavLink to="/" onClick={() => setMenuAbierto(false)}>Inicio</NavLink></li>
            <li><NavLink to="" onClick={() => setMenuAbierto(false)}>Contacto</NavLink></li>

            <li className={`navbar__item--dropdown ${mostrarMenu ? 'active' : ''}`}>
            <NavLink to="#" onClick={toggleMenu}>Productos</NavLink>
            {mostrarMenu && (
                <ul className="navbar__submenu">
                <li><NavLink to="category/Yeso" onClick={handleSubmenuClick}>Yeso</NavLink></li>
                <li><NavLink to="category/Velas" onClick={handleSubmenuClick}>Velas</NavLink></li>
                <li><NavLink to="category/Aromatizantes" onClick={handleSubmenuClick}>Aromatizantes</NavLink></li>
                <li><NavLink to="category/Hogar Deco" onClick={handleSubmenuClick}>Hogar Deco</NavLink></li>
                </ul>
            )}
            </li>

            <li><NavLink to="" onClick={() => setMenuAbierto(false)}>Sobre Nosotros</NavLink></li>
            <li><CarWidget /></li>
        </ul>
        </nav>
    );
};

export default NavBar;

