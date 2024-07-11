import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.scss';
import ArticlesListPage from './components/ArticlesListPage/ArticlesListPage';
import ArticleSinglePage from './components/ArticleSinglePage/ArticleSinglePage';
import SignUpPage from './components/SignUpPage/SignUpPage';
import LayoutRoute from './components/LayotRoute/LayoutRoute';
import SignInPage from './components/SignInPage/SignInPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutRoute />,
    children: [
      {
        index: true,
        element: <ArticlesListPage />,
      },
      {
        path: '/articles',
        element: <ArticlesListPage />,
      },
      {
        path: '/articles/:slug',
        element: <ArticleSinglePage />,
      },
      {
        path: '/sign-up',
        element: <SignUpPage />,
      },
      {
        path: '/sign-in',
        element: <SignInPage />,
      },
    ],
  },
]);

const App: React.FC = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
