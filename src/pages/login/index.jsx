// src/pages/login/index.jsx
import { useState } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuthStore from '../../store/authStore';

const Login = () => {
  const { oktaAuth, authState } = useOktaAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const setAuthState = useAuthStore(state => state.setAuthState);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleNext = (e) => {
    e.preventDefault();
    if (email) {
      setShowPassword(true);
    }
  };

  const handleDirectLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const transaction = await oktaAuth.signInWithCredentials({
        username: email,
        password: password
      });

      if (transaction.status === 'SUCCESS') {
        const tokens = await oktaAuth.token.getWithoutPrompt({
          sessionToken: transaction.sessionToken,
          scopes: ['openid', 'profile', 'email']
        });

        await oktaAuth.tokenManager.setTokens(tokens.tokens);

        setAuthState({
          isAuthenticated: true,
          user: tokens.tokens.idToken.claims,
          accessToken: tokens.tokens.accessToken.accessToken,
          isPending: false,
          error: null
        });

        const from = location.state?.from?.pathname || '/';
        navigate(from, { replace: true });
      }
    } catch (err) {
      console.error('Login error:', err);
      setError(err.message || 'Invalid credentials');
    } finally {
      setIsLoading(false);
    }
  };

  if (authState?.isAuthenticated) {
    const from = location.state?.from?.pathname || '/';
    navigate(from, { replace: true });
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Image */}
        <div className="w-full max-w-md mx-auto mb-8">
          <img
            src="../../../public/login.jpg"
            alt="Doctor with patient"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        <div className="text-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900">
            Sharesource Information
          </h2>
        </div>

        {error && (
          <div className="rounded-md bg-red-50 p-4 mb-4">
            <div className="text-sm text-red-700">{error}</div>
          </div>
        )}

        <form onSubmit={showPassword ? handleDirectLogin : handleNext}>
          <div className="flex flex-wrap items-end gap-4">
            <div className="flex-1">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={showPassword}
              />
            </div>

            {showPassword ? (
              <>
                <div className="flex-1">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="inline-flex justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 h-[38px]"
                >
                  {isLoading ? 'Signing in...' : 'Login'}
                </button>
              </>
            ) : (
              <button
                type="submit"
                className="inline-flex justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 h-[38px]"
              >
                Next
              </button>
            )}
          </div>
        </form>

        <div className="mt-8 text-center text-sm text-gray-600">
          Use of this system is subject to Baxter's Privacy Policy/Terms and Conditions.
        </div>
      </div>
    </div>
  );
};

export default Login;