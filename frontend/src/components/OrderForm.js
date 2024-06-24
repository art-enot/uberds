import React, { useState } from 'react';
import api from '../services/api';
import { TextField } from '@consta/uikit/TextField';
import { Button } from '@consta/uikit/Button';

const OrderForm = () => {
    const [order, setOrder] = useState({
        title: '',
        description: '',
        rnp_number: '',
        start_drilling_date: '',
        mobilization_period: '',
        service_period: '',
        max_posts: '',
    });

    const handleChange = (e) => {
        setOrder({ ...order, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Convert date fields to strings in YYYY-MM-DD format
        const formattedOrder = {
            ...order,
            start_drilling_date: new Date(order.start_drilling_date).toISOString().split('T')[0],
            mobilization_period: new Date(order.mobilization_period).toISOString().split('T')[0],
        };

        api.post('orders/', formattedOrder)
            .then(response => {
                console.log(response.data);
                // Optionally, handle success (e.g., clear form, show notification)
            })
            .catch(error => {
                console.error("There was an error creating the order!", error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField label="Наименование процедуры выбора" name="title" value={order.title} onChange={handleChange} />
            <TextField label="Объект выполнения работ / оказания услуг" name="description" value={order.description} onChange={handleChange} />
            <TextField label="Реестровый номер процедуры (РНП)" name="rnp_number" value={order.rnp_number} onChange={handleChange} />
            <TextField label="Сроки начала бурения 1 скважины" name="start_drilling_date" value={order.start_drilling_date} onChange={handleChange} type="date" />
            <TextField label="Сроки мобилизации" name="mobilization_period" value={order.mobilization_period} onChange={handleChange} type="date" />
            <TextField label="Период оказания услуг" name="service_period" value={order.service_period} onChange={handleChange} />
            <TextField label="Ориентировочное max количество постов" name="max_posts" value={order.max_posts} onChange={handleChange} type="number" />
            <Button type="submit" label="Создать" />
        </form>
    );
};

export default OrderForm;