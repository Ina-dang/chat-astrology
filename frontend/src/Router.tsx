import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { ErrorPage, FortunePage, FortuneResultPage, MainPage, SajuPage } from './pages';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<MainPage />} />
      <Route path="saju" element={<SajuPage />} />
      <Route path="fortune">
        <Route index element={<FortunePage />} />
        <Route path="result" element={<FortuneResultPage />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Route>,
  ),
);

const Router: React.FC = () => {
  return <RouterProvider router={router} />;
};
export { Router };
