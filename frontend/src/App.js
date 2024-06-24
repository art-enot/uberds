import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RequirementList from './components/RequirementList';
import OrderList from './components/OrderList';
import OrderDetail from './components/OrderDetail';
import OrderForm from './components/OrderForm';
import Header from './Header';
import Footer from './Footer';

function App() {
    return (
        <Router>
            <div>
            <Header />  {/* Используем компонент Header */}
            <div style={{ padding: '25px' }}>
                <Routes>
                    <Route path="/" element={<RequirementList />} />
                    <Route path="/requirements" element={<RequirementList />} />
                    <Route path="/orders" element={<OrderList />} />
                    <Route path="/orders/:id" element={<OrderDetail />} /> {/* Добавьте маршрут для страницы деталей заказа */}
                    <Route path="/create-order" element={<OrderForm />} />
                </Routes>
            </div>
                <Footer />  {/* Используем компонент Footer */}
            </div>
        </Router>
    );
}

export default App;
