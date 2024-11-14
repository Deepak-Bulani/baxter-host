// src/components/Login/Login.jsx
import React, { useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
  const { oktaAuth, authState } = useOktaAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (authState?.isAuthenticated) {
      const from = location.state?.from?.pathname || '/';
      navigate(from);
    }
  }, [authState, navigate, location]);

  const login = async () => {
    try {
      const fromUri = location.state?.from?.pathname || '/';
      await oktaAuth.signInWithRedirect({
        originalUri: fromUri,
        scopes: ['openid', 'profile', 'email'],
      });
    } catch (err) {
      console.error('Error logging in:', err);
    }
  };

  if (authState?.isAuthenticated) {
    return null;
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <h2>Welcome to Our Application</h2>
          <p className="mt-3">Please sign in to continue</p>
          <button className="btn btn-primary btn-lg mt-3" onClick={login}>
            Sign In with Okta
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
