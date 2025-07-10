import React, { useState, useContext } from 'react';
import { collection, serverTimestamp, addDoc } from 'firebase/firestore';
import { useForm } from 'react-hook-form';
import { CartContext } from '../context/CartContext';
import { dataBase } from '../services/firebase';

const CheckoutHook = () => {
    const [orderId, setOrderId] = useState('');
    const { register, handleSubmit, formState: { errors }, getValues } = useForm();
    const { cart, clear, cartTotal } = useContext(CartContext);

    const finalizarCompra = (dataDelForm) => {
        console.log('Todo Ok', dataDelForm);

        const order = {
        comprador: {
            name: dataDelForm.name,
            lastname: dataDelForm.lastname,
            email: dataDelForm.email,
            address: dataDelForm.address,
        },
        compras: cart,
        total: cartTotal(),
        date: serverTimestamp(),
        };

        const ventas = collection(dataBase, 'orders');
        addDoc(ventas, order)
        .then((resp) => {
            setOrderId(resp.id);
            clear(); // vaciar carrito
        })
        .catch((error) => {
            console.error('Error al crear la orden: ', error);
        });
    };

    return (
        <>
        {orderId ? (
            <div>
            <h2>¡Gracias por tu compra!</h2>
            <p>Tu número de orden es: {orderId}</p>
            </div>
        ) : (
            <div>
            <h1>Complete con sus datos</h1>
            <form onSubmit={handleSubmit(finalizarCompra)}>
                <input
                type="text"
                placeholder="Nombre"
                {...register('name', { required: true, minLength: 3 })}
                />
                {errors?.name && (
                <span style={{ color: 'red' }}>
                    El nombre es obligatorio y debe tener al menos 3 caracteres
                </span>
                )}

                <input
                type="text"
                placeholder="Apellido"
                {...register('lastname', { required: true, minLength: 3 })}
                />
                {errors?.lastname && (
                <span style={{ color: 'red' }}>
                    El apellido es obligatorio y debe tener al menos 3 caracteres
                </span>
                )}

                <input
                type="email"
                placeholder="Email"
                {...register('email', { required: true })}
                />
                {errors?.email && (
                <span style={{ color: 'red' }}>
                    El email es obligatorio y debe tener un formato válido
                </span>
                )}

                <input
                type="email"
                placeholder="Repite tu Email"
                {...register('email2', {
                    required: true,
                    validate: (value) => value === getValues('email') || 'Los emails no coinciden',
                })}
                />
                {errors?.email2 && <span style={{ color: 'red' }}>{errors.email2.message}</span>}

                <input
                type="text"
                placeholder="Dirección"
                {...register('address', { required: true })}
                />
                {errors?.address && <span style={{ color: 'red' }}>La dirección es obligatoria</span>}

                <button type="submit" disabled={!cart.length}>
                Finalizar Compra
                </button>
            </form>
            </div>
        )}
        </>
    );
    };

export default CheckoutHook;
