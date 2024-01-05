import { useState } from 'react';
export const ItemCounter = ({ onAdd, stock, initial }) => {
    const [count, setCount] = useState(initial);

    const handleIncreaseCount = () => {
        if (stock > count) {
            setCount((prev) => prev + 1);
        }
    };

    const handleDecreaseCount = () => {
        if (count > 1) {
            setCount((prev) => prev - 1);
        }
    };

    const handleAdd = () => {
        onAdd(count);
        setCount(initial);
    };

    return (
        <>
            <div className="flex justify-center gap-3 mt-2 p-2">
                <div className="btn-menor" onClick={handleDecreaseCount}>
                    -
                </div>
                <mark className="text-cart">{count} </mark>
                <div className="btn-mayor" onClick={handleIncreaseCount}>
                    +
                </div>
            </div>
            <button className="btn-cart" onClick={handleAdd}>
                Agregar al Carrito
            </button>
        </>
    );
};
