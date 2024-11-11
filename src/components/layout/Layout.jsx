import { Outlet } from 'react-router-dom';

const Layout = () => (
  <>
    <div className="grid justify-center">
      <Outlet />
    </div>
  </>
);

export default Layout;
