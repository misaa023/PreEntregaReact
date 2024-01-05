import { useContext } from 'react';
import { ItemCounter } from './ItemCounter';
import { CartContext } from '../contexts/CartContext';

export const ItemDetail = ({ item }) => {
    const { onAdd } = useContext(CartContext);
    const add = (quantity) => {
        onAdd(item, quantity);
    };
    return (
        <>
            <div className="card-bebida">
                <img
                    className="img-bebida"
                    src={item.pictureUrl}
                    alt={item.title}
                />
                <h1 className="text-center txt-bebida">{item.description}</h1>
                <h2 className="text-center txt-bebida">${item.price}</h2>
                <h2 className="text-center txt-stock">Stock: {item.stock}</h2>
            </div>
            <div className="contador">
                <ItemCounter onAdd={add} stock={item.stock} initial={1} />
            </div>
        </>
    );
};
