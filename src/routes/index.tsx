import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Layout } from '../layouts/Layout';

const Home = lazy(() => import('../pages/Home').then((m) => ({ default: m.Home })));
const ButtonSystem = lazy(() => import('../pages/ButtonSystem').then((m) => ({ default: m.ButtonSystem })));
const CardSystem = lazy(() => import('../pages/CardSystem').then((m) => ({ default: m.CardSystem })));

function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent" />
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<Loading />}>
        <Layout>
          <Home />
        </Layout>
      </Suspense>
    ),
  },
  {
    path: '/button-system',
    element: (
      <Suspense fallback={<Loading />}>
        <Layout>
          <ButtonSystem />
        </Layout>
      </Suspense>
    ),
  },
  {
    path: '/card-system',
    element: (
      <Suspense fallback={<Loading />}>
        <Layout>
          <CardSystem />
        </Layout>
      </Suspense>
    ),
  },
]);
