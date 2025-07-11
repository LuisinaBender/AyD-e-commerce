import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, cantidad) => {
        if (isInCart(item.id)) {
        const newCart = cart.map(prod =>
            prod.id === item.id ? { ...prod, cantidad: prod.cantidad + cantidad } : prod
        );
        setCart(newCart);
        } else {
        setCart([...cart, { ...item, cantidad }]);
        }
    };

    const removeItem = (id) => {
        setCart(cart.filter(prod => prod.id !== id));
    };

    const clear = () => {
        setCart([]);
    };

    const isInCart = (id) => cart.some(prod => prod.id === id);

    const cartQuantity = () => cart.reduce((acc, prod) => acc + prod.cantidad, 0);

    const cartTotal = () => cart.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0);

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clear, cartTotal, cartQuantity }}>
        {children}
        </CartContext.Provider>
    );
    };


