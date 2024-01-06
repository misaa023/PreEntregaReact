import { useContext, useState } from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import Table from 'react-bootstrap/Table';
import Swal from 'sweetalert2';

import { CartContext } from '../contexts/CartContext';

import { getFirestore, collection, addDoc } from 'firebase/firestore';

const initialValues = {
    name: '',
    direction: '',
    phone: '',
};

export const Cart = () => {
    const { clear, items, onRemove } = useContext(CartContext);
    const [buyer, setBuyer] = useState(initialValues);
    const navigate = useNavigate();

    const handleChange = () => {
        setBuyer((buyer) => {
            return {
                ...buyer,
                [event.target.name]: event.target.value,
            };
        });
    };

    const sendOrder = () => {
        // Validar que los campos del formulario estén completos
        if (!buyer.name || !buyer.direction || !buyer.phone) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...⚠️',
                text: 'Por favor completa los campos antes de comprar bebidas',
            });
            return;
        }

        const order = {
            buyer,
            items,
            total: 13600,
        };

        const db = getFirestore();
        const orderCollection = collection(db, 'orders');

        addDoc(orderCollection, order).then(({ id }) => {
            if (id) {
                Swal.fire({
                    title: 'Su orden ha sido completada!',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500,
                });
                setBuyer(initialValues);
                clear();
            }
        });
    };

    if (!items.length) {
        return (
            <Container className="mt-5 text-center">
                <h2 className="cart-vacio">Carrito Vacio</h2>
            </Container>
        );
    }

    /*cheqout*/
    const total = items.reduce(
        (acumulador, valorActuar) =>
            acumulador + valorActuar.quantity * valorActuar.price,
        0,
    );

    return (
        <Container className=" mt-4 text-center ">
            <h1 className="text-center mb-3">Carrito</h1>

            <Table striped="columns" variant="info" className="contenido">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Cantidad</th>
                        <th>Imagen</th>
                        <th>Precio</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {items?.map((item) => (
                        <tr key={item.id}>
                            <td>{item.description}</td>
                            <td>{item.quantity}</td>
                            <td>
                                <img src={item.pictureUrl} width={120} />
                            </td>
                            <td>{item.price}</td>
                            <td
                                className="btn-eliminar"
                                onClick={() => onRemove(item.id)}
                            >
                                ❌
                            </td>
                        </tr>
                    ))}
                    <tr className="total">
                        <td>Total</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>${total}</td>
                    </tr>
                </tbody>
            </Table>
            <Container className="text-center">
                <button
                    className="btn btn-light mt-3 btn-vaciar"
                    onClick={clear}
                >
                    Vaciar Carrito
                </button>
                <h2 className="text-form">
                    Complete el formulario para finalizar la compra
                </h2>
                <hr />
            </Container>

            <Form className="formu">
                <Form.Group className="mb-3">
                    <Form.Label className="fl mt-3 mb-2">
                        Ingresa tu nombre
                    </Form.Label>
                    <Form.Control
                        className="mt-2"
                        type="name"
                        value={buyer.name}
                        onChange={handleChange}
                        name="name"
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label className="fl mt-3 mb-2">
                        Ingresa tu dirección
                    </Form.Label>
                    <Form.Control
                        className="mt-2"
                        type="direction"
                        value={buyer.direction}
                        onChange={handleChange}
                        name="direction"
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label className="fl mt-3 mb-2">
                        Ingresa tu teléfono
                    </Form.Label>
                    <Form.Control
                        className="mt-2"
                        type="phone"
                        value={buyer.phone}
                        onChange={handleChange}
                        name="phone"
                        required
                    />
                </Form.Group>

                <Button className="mb-3 " variant="warning" onClick={sendOrder}>
                    <div className="btn-comprar">Comprar</div>
                </Button>
            </Form>
        </Container>
    );
};
