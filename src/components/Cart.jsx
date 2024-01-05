import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
export const Cart = () => {
    const { clear, items, onRemove } = useContext(CartContext);

    const total = items.reduce(
        (acumulador, valorActuar) =>
            acumulador + valorActuar.quantity * valorActuar.price,
        0,
    );

    return (
        <div>
            <h1 className="mt-6 text-center font-bold text-xl">
                Carrito de compras
            </h1>
            <div className="total">
                <h3>Total a pagar : ${total}</h3>
            </div>
            {items?.map((item) => (
                <div className="vista-cart" key={item.id}>
                    <h3>{item.description}</h3>
                    <h3>${item.price}</h3>
                    <img className="img-cart" src={item.pictureUrl} alt="" />
                    <h3>{item.quantity}</h3>
                    <div className="btn-eliminar">
                        <button onClick={() => onRemove(item.id)}>
                            Eliminar 🗑️
                        </button>
                    </div>
                </div>
            ))}

            <div className="btn-vaciar">
                <button onClick={clear}>Vaciar carrito</button>
            </div>
        </div>
    );
};
