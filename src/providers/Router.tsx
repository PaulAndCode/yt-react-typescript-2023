import React, { type FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from 'routes/Home';
import About from 'routes/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
]);

const Router: FC = () => {
  return <RouterProvider router={router} />;
};

export default Router;
