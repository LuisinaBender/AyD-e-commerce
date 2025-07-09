import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, cantidad) => {
        if (isInCart(item.id)) {
        const newCart = cart.map((prod) => {
            if (item.id === prod.id) {
            return { ...prod, cantidad: prod.cantidad + cantidad };
            } else {
            return prod;
            }
        });
        setCart(newCart);
        } else {
        setCart([...cart, { ...item, cantidad }]);
        }
    };

    const removeItem = (id) => {
        setCart(cart.filter((prod) => prod.id !== id));
    };

    const clear = () => {
        setCart([]);
    };

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id);
    };

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clear }}>
        {children}
        </CartContext.Provider>
    );
};

