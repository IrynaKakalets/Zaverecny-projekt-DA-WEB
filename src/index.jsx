import { createRoot } from 'react-dom/client';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './global.css';
import { HomePage } from './pages/HomePage';
import { InfoPage } from './pages/InfoPage';
import { FishAtlas } from './pages/FishAtlas';
import { Quiz } from './pages/Quiz';
import { Contacts } from './pages/Contacts';

const router = createBrowserRouter([
  {
    path: '/HomePage',
    element: <HomePage />,
  },
  {
    path: '/FishAtlas',
    element: <FishAtlas />,
  },
  {
    path: '/Contacts',
    element: <Contacts />,
  },
  {
    path: '/InfoPage',
    element: <InfoPage />,
  },
  {
    path: '/Quiz',
    element: <Quiz />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
