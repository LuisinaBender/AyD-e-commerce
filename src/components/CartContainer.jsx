import React, { useContext } from 'react';
import EmpyCart from './EmpyCart';
import CartView from './CartView';
import { CartContext } from '../context/CartContext';

const CartContainer = () => {
  const { cart } = useContext(CartContext);
  const cartIsEmpty = cart.length === 0;

  return (
    <>
      {cartIsEmpty ? <EmpyCart /> : <CartView />}
    </>
  );
};

export default CartContainer;


