import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css';
import Home from './Components/Home';
import Login from './Components/Login';
import Root from './Components/Root';
import Register from './Components/Register';
import AuthProvider from './Providers/AuthProvider';
import OrderList from './Components/OrderList';
import PrivateRoutes from './Routes/PrivateRoutes';
import Blogs from './Components/Blogs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/orders',
        element: <PrivateRoutes> <OrderList></OrderList> </PrivateRoutes>
      },
      {
        path: '/blogs',
        element: <PrivateRoutes> <Blogs></Blogs> </PrivateRoutes>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>

  </React.StrictMode>,
)
