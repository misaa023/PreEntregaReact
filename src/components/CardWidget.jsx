import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
export const CardWidget = () => {
    const { items } = useContext(CartContext);

    const total = items.reduce(
        (acumulador, valorActual) => acumulador + valorActual.quantity,
        0,
    );

    return (
        <Link to="/cart">
            <span className="text-xl ml-10">🛒 {total}</span>
        </Link>
    );
};
