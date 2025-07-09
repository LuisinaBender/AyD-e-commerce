import React, { createContext, } from 'react';
import { useState } from 'react';


export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    
    const [cart, setCart] = useState([]); // Estado del carrito

// Datos y logica del carrito 
    const addItem = (item, cantidad) => {
        if (isInCart(item.id)) {
        
            const newCart = cart.map((prod) => {
                if (item.id === prod.id) {
                    return {...prod, quantity: prod.quantity + cantidad};
                } else {
                    return prod;
                }
            })
            setCart(newCart);
        }else {
            setCart([...cart, {...item, quantity:cantidad}]);
        }

        
    setCart([...cart, {...item, quantity:cantidad}]);     
        
    }

    const removeItem = (id) => {
        setCart(cart.filter((prod) => prod.id !== id));
    }

    const clear = () => {
        setCart([]);
    }

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id);
    }




// Funciones para agregar, eliminar y actualizar productos en el carrito
return (
        <CartContext.Provider value={{cart}}>
            {children}
        </CartContext.Provider>
    )
}