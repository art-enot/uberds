import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';

const OrderList = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        api.get('orders/')
            .then(response => {
                setOrders(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the orders!", error);
            });
    }, []);

    return (
        <div>
            <h1>Наряд-заказы</h1>
            <ul>
                {orders.map(order => (
                    <li key={order.id}>
                        <Link to={`/orders/${order.id}/`}>{order.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OrderList;