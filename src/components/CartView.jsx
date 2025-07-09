import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartView = () => {

  const {cart, clear, removeItem} = useContext(CartContext);
  return (
    <div>
      <h2>Tu carrito de compras</h2>
      <p>Aquí puedes ver los productos que has agregado a tu carrito.</p>

      <div>
            {
                cart.map((compra) => (
                  <div key={compra.id} className="cart-item">
                    <img src={compra.image} alt={compra.title} style= {{width:'10rem'}} />
                    <h3>{compra.title}</h3>
                    <p>Precio: ${compra.price}</p>
                    <p>Cantidad: {compra.quantity}</p>
                    <button onClick={() => removeItem(compra.id)}>Eliminar</button>
                    <p>Subtotal: ${compra.price * compra.quantity},00</p>

                </div>
                ))
            }
          </div>
      <div className="cart-actions">
        <button onClick={clear}>Vaciar carrito</button>
        <button onClick={() => alert('Compra realizada!')}>Finalizar compra</button>
        </div>
      <div className="cart-total">
        <h3>Total: ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)},00</h3>
        </div>
      <div className="cart-empty">
        {cart.length === 0 && <p>Tu carrito está vacío. Agrega productos para comenzar a comprar.</p>}
        </div>
      <div className="cart-clear">
        {cart.length > 0 && <button onClick={clear}>Vaciar carrito</button>}
        </div>

    </div>
  )
}

export default CartView

