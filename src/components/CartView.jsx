import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartView = () => {

  const {cart, clear, removeItem, cartTotal} = useContext(CartContext);
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
                    

                </div>
                ))
            }
          </div>
      <div className="cart-actions">
        <button onClick={clear}>Vaciar carrito</button>
        <button onClick={() => alert('Compra realizada!')}>Finalizar compra</button>
        </div>
      <div className="cart-total">
        <h3>Total: ${cartTotal},00</h3>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center',       width:'80%', padding:'2rem'}}>
            <button className='btn btn-danger' onClick={clear}> Vaciar carrito</button>
            <Link className='btn btn-success'to = '/checkout'>Terminar Compra</Link>
        </div>
        </div>
      
    </div>
  )
}

export default CartView

