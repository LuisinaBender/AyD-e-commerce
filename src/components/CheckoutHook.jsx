import { collection, serverTimestamp } from 'firebase/firestore';
import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useForm } from 'react-hook-form';

const CheckoutHook = () => {

    
    const [orderId, setOrderId] = useState('')
    const {register, handleSubmit, formState:{errors}, getValues} =userForm()
    console.log('errores',errors)
    const {cart, cardTotal}= useContext(CartContext);

    const finalizarCompra = (dataDelForm) => {
        console.log('Todo Ok',dataDelForm)


    }
    

        let order = {
            comprador: buyer,
            compras: cart,
            total: cardTotal(),
            date:serverTimestamp()

        }

    }


    return (
            <>
                orderId ? <div>
                    <h2>¡Gracias por tu compra!</h2>
                    <p>Tu número de orden es: {orderId()}</p>
                </div>
                : <div>
                        <h1>Complete con sus datos</h1>
                    <form onSubmit={handleSubmit(finalizarCompra)}> 
                            <input type="text" name='name' placeholder="Nombre" {...register("name",{required:true, minLenght:3})}/>
                            {errors?.name?.type === 'required' && <span style={{color:'red'}}>El nombre es obligatorio y debe tener al menos 3 caracteres</span>}
                            <input type="text" name ='lastname' placeholder="Apellido" required />
                            <input type="email" name='email' placeholder="Email" required />
                            <input type="tel" name='phone' placeholder="Teléfono" required />
                            <input type="text" name='address' placeholder="Dirección" required />
                            <button type="submit">Finalizar Compra</button>
                    </form>
                </div>
            </>
        
    )


export default CheckoutHook
