import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import PageLayout from '@/components/layout/PageLayout';

const HomePage = lazy(() => import('@/pages/HomePage'));
const PrivacyPolicyPage = lazy(() => import('@/pages/PrivacyPolicyPage'));
const TermsPage = lazy(() => import('@/pages/TermsPage'));
const EULAPage = lazy(() => import('@/pages/EULAPage'));
const SupportPage = lazy(() => import('@/pages/SupportPage'));

function LazyWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-maxly-bg">
          <div className="w-8 h-8 border-2 border-maxly-primary border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      {children}
    </Suspense>
  );
}

export const router = createBrowserRouter([
  {
    element: <PageLayout />,
    children: [
      {
        path: '/',
        element: <LazyWrapper><HomePage /></LazyWrapper>,
      },
      {
        path: '/privacy',
        element: <LazyWrapper><PrivacyPolicyPage /></LazyWrapper>,
      },
      {
        path: '/terms',
        element: <LazyWrapper><TermsPage /></LazyWrapper>,
      },
      {
        path: '/eula',
        element: <LazyWrapper><EULAPage /></LazyWrapper>,
      },
      {
        path: '/support',
        element: <LazyWrapper><SupportPage /></LazyWrapper>,
      },
    ],
  },
]);
