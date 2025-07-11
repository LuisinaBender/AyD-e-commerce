import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const EmpyCart = () => {
  useEffect(() => {
    Swal.fire({
      icon: 'info',
      title: 'Tu carrito está vacío',
      text: '¡Agrega productos para poder realizar una compra!',
      confirmButtonColor: '#b27c3e',
      confirmButtonText: 'Ir a la tienda',
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = '/'; 
      }
    });
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem', color: '#553c26' }}>
      <h2>Tu carrito está vacío</h2>
      <p>Agrega productos para continuar.</p>
      <Link to="/" style={{
        display: 'inline-block',
        marginTop: '1rem',
        padding: '10px 20px',
        backgroundColor: '#b27c3e',
        color: 'white',
        borderRadius: '8px',
        textDecoration: 'none',
        fontWeight: '600'
      }}>Ir a la tienda</Link>
    </div>
  );
};

export default EmpyCart;


