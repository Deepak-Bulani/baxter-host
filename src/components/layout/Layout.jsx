// components/layout/Layout.jsx
import { Outlet } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';
import Navbar from '../navbar/Navbar';

const Layout = () => {
  const { authState } = useOktaAuth();

  return (
    <div className="container mx-auto bg-gray-50">
      {authState?.isAuthenticated && <Navbar />}
      <main className={`${authState?.isAuthenticated ? 'pt-16' : ''}`}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;