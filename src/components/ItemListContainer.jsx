import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

// import { products } from '../data/products';
import { ItemList } from './ItemList';

// importando la base de datos firestore
import {
    getFirestore,
    collection,
    getDocs,
    query,
    where,
} from 'firebase/firestore';

export const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { id } = useParams();

    //(#) Este caso es para mostrar todos los items
    useEffect(() => {
        const db = getFirestore();

        const refCollection = !id
            ? collection(db, 'items')
            : query(collection(db, 'items'), where('category', '==', id));

        getDocs(refCollection).then((snapshot) => {
            if (snapshot.size === 0) console.log('no results');
            else
                setItems(
                    snapshot.docs.map((doc) => {
                        return { id: doc.id, ...doc.data() };
                    }),
                );
        });
    }, [id]);

    return (
        <div>
            <h1 className="mt-6 text-center font-bold text-xl">Bebidas</h1>
            <ItemList items={items} />
        </div>
    );
};
