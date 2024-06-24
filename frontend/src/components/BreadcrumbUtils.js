export const getBreadcrumbs = (page, orderTitle = '') => {
    const breadcrumbs = [
        { title: 'Главная', url: '/' },
        { title: 'Наряд-заказы', url: '/orders' }
    ];

    if (page === 'orders' && orderTitle) {
        breadcrumbs.push({ title: orderTitle, url: '' });
    }

    return breadcrumbs;
};