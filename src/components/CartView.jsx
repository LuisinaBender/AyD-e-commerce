import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartView = () => {
  const { cart, clear, removeItem, cartTotal } = useContext(CartContext);

  return (
    <div>
      <h2>Tu carrito 🛒</h2>

      <div>
        {cart.length === 0 ? (
          <p>Tu carrito está vacío.</p>
        ) : (
          cart.map((compra) => (
            <div key={compra.id} className="cart-item" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <img src={compra.img} alt={compra.name} style={{ width: '10rem' }} />
              <span>{compra.name}</span>
              <span>${compra.price}</span>
              <span>Cantidad: {compra.cantidad}</span>
              <span>Subtotal: ${compra.price * compra.cantidad}</span>
              <button onClick={() => removeItem(compra.id)}>Eliminar</button>
            </div>
          ))
        )}
      </div>

      <h3>Total a pagar: ${cartTotal()},00</h3>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '80%', padding: '2rem' }}>
        <button className='btn btn-danger' onClick={clear}>Vaciar carrito</button>
        <Link className='btn btn-success' to='/checkout'>Terminar Compra</Link>
      </div>
    </div>
  );
};

export default CartView;
