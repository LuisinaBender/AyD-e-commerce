import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import '../css/CartView.css'; 


const CartView = () => {
  const { cart, clear, removeItem, cartTotal } = useContext(CartContext);
  const allItemsHaveQuantity = cart.every(item => item.cantidad > 0);

  const preConfirmation = () => {
    Swal.fire({
      title: '¿Estás seguro de que quieres eliminar el producto?',
      text: "¡No podrás deshacer esta acción!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        clear();
        Swal.fire(
          '¡Eliminado!',
          'El producto ha sido eliminado de tu carrito.',
          'success'
        );
      }
    });
  };

  return (
    <div className="cart-container">
      <h2>Tu carrito 🛒</h2>

      <div>
        {cart.length === 0 ? (
          <p className="cart-empty-alert">Tu carrito está vacío.</p>
        ) : (
          cart.map((compra) => (
            <div key={compra.id} className="cart-item">
              <img src={compra.img} alt={compra.name} />
              <span>{compra.name}</span>
              <span>${compra.price}</span>
              <span>Cantidad: {compra.cantidad}</span>
              <span>Subtotal: ${compra.price * compra.cantidad}</span>
              <button onClick={() => removeItem(compra.id)}>Eliminar</button>
            </div>
          ))
        )}
      </div>

      <h3 className="cart-total">Total a pagar: ${cartTotal()},00</h3>

      <div className="cart-actions">
        <button className="btn btn-danger" onClick={preConfirmation}>Vaciar carrito</button>
        
        <Link 
          className={`btn btn-success ${!allItemsHaveQuantity ? 'disabled-link' : ''}`} 
          to={allItemsHaveQuantity ? '/checkout' : '#'}
          onClick={e => {
            if (!allItemsHaveQuantity) {
              e.preventDefault();
              Swal.fire({
                icon: 'warning',
                title: 'Agrega cantidad',
                text: 'Por favor, agrega al menos una unidad a cada producto para continuar.',
                confirmButtonColor: '#b27c3e'
              });
            }
          }}
        >
          Terminar Compra
        </Link>
      </div>
    </div>
  );
};

export default CartView;

