import orderPage from './pages/OrderPage';
import idOrderPage from './pages/IdOrderPage';
import menuPage from './pages/MenuPage';
import mainPage from './pages/MainPage';
import signup from './pages/SignUp';
// import signin from './pages/SignIn';

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
        path: '/signup',
        Component: signup
    },
    {
        path: '/signin',
        Component: signup
    },
    {
        path: '/',
        Component: mainPage
    },
    
]