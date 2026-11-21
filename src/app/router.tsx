import { createBrowserRouter } from 'react-router-dom';
import { LandingPage } from '../pages/LandingPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { UiDemoPage } from '../pages/UiDemoPage';

const routes = [
  { path: '/', element: <LandingPage /> },
  { path: '*', element: <NotFoundPage /> },
];

if (import.meta.env.DEV) {
  routes.unshift({ path: '/__ui', element: <UiDemoPage /> });
}

export const router = createBrowserRouter(routes);
