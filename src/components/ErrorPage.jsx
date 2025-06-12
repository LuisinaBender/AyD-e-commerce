import React from 'react'
import { Link } from 'react-router-dom';

    const ErrorPage = () => {
    return (
        <div>
            <h1>Error 404</h1>
            <p>La página que estás buscando no existe.</p>
            <p>Por favor, verifica la URL o vuelve a la página de inicio.</p>
            <Link to="/" className='btn_volver'>Volver a la página de inicio</Link>
        </div>
    )
}

export default ErrorPage
