import { Navigate, useRoutes } from 'react-router-dom';
import HomePage from './pages/HomePage';

const Router = () => {
    const routes = useRoutes([
        {
            path: "/",
            element: <HomePage />,
            children: [
                { element: <Navigate to="/" />, index: true },

            ]
        },

    ]);

    return routes
}

export default Router;