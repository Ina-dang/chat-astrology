import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ErrorPage, MainPage } from './common';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/taro',
    element: <div>안타로녕하세요</div>,
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
