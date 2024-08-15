import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ErrorPage, MainPage, SajuPage } from './common';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/saju',
    element: <SajuPage />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);

const Router: React.FC = () => {
  return <RouterProvider router={router} />;
};
export { Router };
