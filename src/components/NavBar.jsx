import React, { useState, useEffect, useRef } from 'react';
import '../css/Nav.css';
import CarWidget from './CartWidget';
import { NavLink, useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { dataBase } from '../services/firebase';

const NavBar = () => {
    const [mostrarMenu, setMostrarMenu] = useState(false);
    const [menuAbierto, setMenuAbierto] = useState(false);
    const [busqueda, setBusqueda] = useState('');
    const [mostrarResultados, setMostrarResultados] = useState(false);
    const [productos, setProductos] = useState([]);
    const [cargandoProductos, setCargandoProductos] = useState(true);
    
    const searchRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const obtenerProductos = async () => {
            try {
                setCargandoProductos(true);
                // Cambiado de 'productos' a 'products'
                const productosCollection = collection(dataBase, 'products');
                const productosSnapshot = await getDocs(productosCollection);

                console.log('Documentos en snapshot:', productosSnapshot.docs.length);

                const productosList = productosSnapshot.docs.map((doc) => {
                    const data = doc.data();
                    console.log('Documento:', doc.id, data);
                    return { id: doc.id, ...data };
                });

                setProductos(productosList);
                console.log('Productos cargados:', productosList);
            } catch (error) {
                console.error('Error al cargar productos:', error);
            } finally {
                setCargandoProductos(false);
            }
        };

        obtenerProductos();
    }, []);

    // Cerrar resultados cuando se hace clic fuera
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setMostrarResultados(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSubmenuClick = () => {
        setMostrarMenu(false);
        setMenuAbierto(false);
    };

    const toggleMenu = () => {
        setMostrarMenu(!mostrarMenu);
    };

    const toggleMobileMenu = () => {
        setMenuAbierto(!menuAbierto);
    };

    const handleBusquedaChange = (e) => {
        const valor = e.target.value;
        setBusqueda(valor);
        
        // Solo mostrar resultados si hay texto y productos cargados
        if (valor.trim() && productos.length > 0) {
            setMostrarResultados(true);
        } else {
            setMostrarResultados(false);
        }
    };

    const handleBusquedaFocus = () => {
        if (busqueda.trim() && productos.length > 0) {
            setMostrarResultados(true);
        }
    };

    // Filtrar productos de manera más robusta
    const productosFiltrados = productos.filter((producto) => {
        if (!producto.name) return false;
        
        const nombre = producto.name.toLowerCase();
        const categoria = producto.category ? producto.category.toLowerCase() : '';
        const busquedaLower = busqueda.toLowerCase().trim();
        
        return nombre.includes(busquedaLower) || categoria.includes(busquedaLower);
    });

    const seleccionarProducto = (id) => {
        setBusqueda('');
        setMostrarResultados(false);
        setMenuAbierto(false);
        navigate(`/item/${id}`);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
            setBusqueda('');
            setMostrarResultados(false);
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar__toggle" onClick={toggleMobileMenu}>
                ☰
            </div>

            <ul className={`navbar__links ${menuAbierto ? 'active' : ''}`}>
                <li>
                    <NavLink to="/" onClick={() => setMenuAbierto(false)}>
                        Inicio
                    </NavLink>
                </li>
                <li className={`navbar__item--dropdown ${mostrarMenu ? 'active' : ''}`}>
                    <NavLink to="#" onClick={toggleMenu}>
                        Productos
                    </NavLink>
                    {mostrarMenu && (
                        <ul className="navbar__submenu">
                            <li>
                                <NavLink to="category/Yeso" onClick={handleSubmenuClick}>
                                    Yeso
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="category/Velas" onClick={handleSubmenuClick}>
                                    Velas
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="category/Aromatizantes" onClick={handleSubmenuClick}>
                                    Aromatizantes
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="category/Hogar Deco" onClick={handleSubmenuClick}>
                                    Hogar Deco
                                </NavLink>
                            </li>
                        </ul>
                    )}
                </li>
                <li className="navbar__frase">Tu hogar, tu estilo</li>

                <li style={{ position: 'relative' }} ref={searchRef}>
                    <input
                        type="text"
                        placeholder="Buscar..."
                        className="navbar__buscador"
                        value={busqueda}
                        onChange={handleBusquedaChange}
                        onFocus={handleBusquedaFocus}
                        onKeyDown={handleKeyDown}
                        disabled={cargandoProductos}
                    />

                    {mostrarResultados && busqueda && (
                        <ul
                            className="resultados-busqueda"
                            style={{
                                position: 'absolute',
                                top: '38px',
                                left: 0,
                                right: 0,
                                maxHeight: '300px',
                                overflowY: 'auto',
                                backgroundColor: '#fff8f0',
                                border: '1px solid #b27c3e',
                                borderRadius: '8px',
                                zIndex: 10000,
                                padding: 0,
                                margin: 0,
                                listStyle: 'none',
                            }}
                        >
                            {cargandoProductos ? (
                                <li
                                    style={{
                                        padding: '10px',
                                        color: '#b27c3e',
                                        textAlign: 'center',
                                    }}
                                >
                                    Cargando productos...
                                </li>
                            ) : productosFiltrados.length > 0 ? (
                                productosFiltrados.map((producto) => (
                                    <li
                                        key={producto.id}
                                        onClick={() => seleccionarProducto(producto.id)}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            padding: '8px 12px',
                                            cursor: 'pointer',
                                            borderBottom: '1px solid #b27c3e',
                                            color: '#553c26',
                                        }}
                                        onMouseDown={(e) => e.preventDefault()}
                                    >
                                        {producto.img && (
                                            <img
                                                src={producto.img}
                                                alt={producto.name}
                                                style={{
                                                    width: '50px',
                                                    height: '50px',
                                                    objectFit: 'cover',
                                                    borderRadius: '6px',
                                                    marginRight: '12px',
                                                    border: '1px solid #b27c3e',
                                                }}
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                }}
                                            />
                                        )}
                                        <div>
                                            <div style={{ fontWeight: 'bold' }}>{producto.name}</div>
                                            {producto.price && <div>${producto.price}</div>}
                                        </div>
                                    </li>
                                ))
                            ) : (
                                <li
                                    style={{
                                        padding: '10px',
                                        color: '#b27c3e',
                                        fontStyle: 'italic',
                                        textAlign: 'center',
                                    }}
                                >
                                    No se encontraron productos
                                </li>
                            )}
                        </ul>
                    )}
                </li>

                <li>
                    <CarWidget />
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;