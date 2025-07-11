import React, { useState, useContext } from 'react';
import { collection, serverTimestamp, addDoc } from 'firebase/firestore';
import { useForm } from 'react-hook-form';
import { CartContext } from '../context/CartContext';
import { dataBase } from '../services/firebase';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import 'animate.css';
import '../css/CheckoutHook.css';

const CheckoutHook = () => {
    const [orderId, setOrderId] = useState('');
    const { register, handleSubmit, formState: { errors }, getValues } = useForm();
    const { cart, clear, cartTotal } = useContext(CartContext);
    const navigate = useNavigate();

    const finalizarCompra = (dataDelForm) => {
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
            clear(); // Vaciar carrito

            Swal.fire({
            title: '¡Gracias por tu compra!',
            text: `Tu número de orden es: ${resp.id}`,
            icon: 'success',
            confirmButtonColor: '#b27c3e',
            confirmButtonText: 'Aceptar',
            showClass: {
                popup: 'animate__animated animate__fadeInDown',
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp',
            },
            }).then(() => {
            setTimeout(() => {
                navigate('/');
            }, 1500);
            });
        })
        .catch((error) => {
            console.error('Error al crear la orden:', error);
            Swal.fire({
            title: 'Error',
            text: 'Hubo un problema al procesar tu compra. Por favor, intenta nuevamente.',
            icon: 'error',
            confirmButtonColor: '#b27c3e',
            confirmButtonText: 'Aceptar',
            });
        });
    };

    return (
        <>
        {!orderId && (
            <div className="checkout-container">
            <h1>Complete con sus datos</h1>
            <form onSubmit={handleSubmit(finalizarCompra)}>
                <input
                type="text"
                placeholder="Nombre"
                {...register('name', { required: true, minLength: 3 })}
                />
                {errors?.name && (
                <span>El nombre es obligatorio y debe tener al menos 3 caracteres</span>
                )}

                <input
                type="text"
                placeholder="Apellido"
                {...register('lastname', { required: true, minLength: 3 })}
                />
                {errors?.lastname && (
                <span>El apellido es obligatorio y debe tener al menos 3 caracteres</span>
                )}

                <input
                type="email"
                placeholder="Email"
                {...register('email', { required: true })}
                />
                {errors?.email && (
                <span>El email es obligatorio y debe tener un formato válido</span>
                )}

                <input
                type="email"
                placeholder="Repite tu Email"
                {...register('email2', {
                    required: true,
                    validate: (value) =>
                    value === getValues('email') || 'Los emails no coinciden',
                })}
                />
                {errors?.email2 && <span>{errors.email2.message}</span>}

                <input
                type="text"
                placeholder="Dirección"
                {...register('address', { required: true })}
                />
                {errors?.address && <span>La dirección es obligatoria</span>}

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
