import { useOktaAuth } from '@okta/okta-react';
import { Navigate, useLocation } from 'react-router-dom';

const SecureRoute = ({ children }) => {
  const { authState } = useOktaAuth();
  const location = useLocation();

  if (!authState) {
    return <div>Loading...</div>;
  }

  if (!authState.isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default SecureRoute;
