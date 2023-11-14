import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { products } from '../data/products';
import { ItemList } from './ItemList';

export const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const mypromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products);
            }, 2000);
        });
        mypromise.then((response) => {
            if (!id) {
                setItems(response);
            } else {
                const filterByCategory = response.filter(
                    (item) => item.category === id,
                );
                setItems(filterByCategory);
            }
        });
    }, [id]);

    return (
        <div>
            <h1 className="mt-6 text-center font-bold text-xl">Bebidas</h1>
            <ItemList items={items} />
        </div>
    );
};
