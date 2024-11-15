// components/layout/Layout.jsx
import { Outlet } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';
import Navbar from '../navbar/Navbar';
import TopNav from '../topnav/TopNav';

const Layout = () => {
  const { authState } = useOktaAuth();

  return (
    <div className="container mx-auto bg-gray-50">
      {authState?.isAuthenticated && <TopNav />}
      {authState?.isAuthenticated && <Navbar />}
      <main className={`${authState?.isAuthenticated ? 'pt-2' : ''}`}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
