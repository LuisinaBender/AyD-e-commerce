import React from 'react'
import EmpyCart from './EmpyCart';
import CartView from './CartView';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartContainer = () => {
  const { cart } = useContext(CartContext);

  const cartIsEmpty = cart.reduce((acc, item) => acc + item.cantidad, 0) === 0;

  return (
    <>
      {cartIsEmpty ? <EmpyCart /> : <CartView />}
    </>
  );
};

export default CartContainer;


