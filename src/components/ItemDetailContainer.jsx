import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
// firestore
import { getFirestore, doc, getDoc, query, where } from 'firebase/firestore';
import { ItemDetail } from './ItemDetail';

export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();

        const refDoc = doc(db, 'items', id);

        getDoc(refDoc).then((snapshot) => {
            setItem({ id: snapshot.id, ...snapshot.data() });
        });
    }, [id]);

    return <div>{item ? <ItemDetail item={item} /> : <>Loading...</>}</div>;
};
