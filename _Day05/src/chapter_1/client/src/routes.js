import orderPage from './pages/OrderPage';
import idOrderPage from './pages/IdOrderPage';
import menuPage from './pages/MenuPage';
import mainPage from './pages/MainPage';

export const publicRoutes = [
    {
        path: '/orders',
        Component: orderPage
    },
    {
        path: '/orders/:id',
        Component: idOrderPage
    },
    {
        path: '/menu',
        Component: menuPage
    },
    {
        path: '/',
        Component: mainPage
    }
]