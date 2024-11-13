import { Outlet } from 'react-router-dom';
import Navbar from '../navbar/Navbar';

const Layout = () => (
  <>
    <div className="grid justify-center">
      <Navbar />
      <Outlet />
    </div>
  </>
);

export default Layout;
