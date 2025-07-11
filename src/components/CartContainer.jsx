import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import EmpyCart from './EmpyCart';
import CartView from './CartView';

const CartContainer = () => {
    const { cart } = useContext(CartContext);

    const hayProductosConCantidad = cart.some(item => item.cantidad > 0);

    return (
        <>
            {
                hayProductosConCantidad ? <CartView /> : <EmpyCart />
            }
        </>
    );
};

export default CartContainer;



