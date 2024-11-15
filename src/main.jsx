import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LoginCallback } from '@okta/okta-react';
import App from './App.jsx';
import SecureRoute from './components/auth/SecureRoute.jsx';
import CustomSecurityWrapper from './components/auth/CustomSecurityWrapper.jsx';
import Login from './pages/login/index.jsx';
import Layout from './components/layout/Layout.jsx';
import Clinical from './pages/clinical/index.jsx';
import Patient from 'cmsBaxter/Patient'
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <CustomSecurityWrapper>
        <Layout />
      </CustomSecurityWrapper>
    ),
    children: [
      {
        index: true,
        element: (
          <SecureRoute>
            <App />
          </SecureRoute>
        ),
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'patientAd',
        element: <Patient />,
      },
      {
        path: 'callback',
        element: <LoginCallback />,
      },
      {
        path: 'clinical',
        element: (
          <SecureRoute>
            <Clinical />
          </SecureRoute>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
